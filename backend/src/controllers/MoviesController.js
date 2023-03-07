const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MoviesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const user_id = request.user.id;

        const movie_id = await knex("movies").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagsInsert = tags.map(tag => {
            return {
                name: tag,
                user_id,
                movie_id
            }
        });

        await knex("tags").insert(tagsInsert);

        response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const movie = await knex("movies").where({ id: id }).first();

        if (!movie) {
            throw new AppError("Note not found.", 404)
        }

        const tags = await knex("tags").where({ movie_id: id });

        const movieNote = {
            ...movie,
            tags
        }

        response.json(movieNote)
    }

    async update(request, response) {
        const { id } = request.params;
        const { title, description, rating, tags } = request.body;

        const movieNote = await knex("movies").where({ id: id }).first();
        const user_id = movieNote.user_id

        if(tags) {
            const previousTags = await knex("tags")
                .select("name")
                .where({ movie_id: id })
            
            const listPreviousTags = previousTags.map(tag => tag.name)
            
            if (listPreviousTags != tags) {
                await knex("tags").whereIn("name", listPreviousTags).delete();

                const tagsInsert = tags.map(tag => {
                    return {
                        name: tag,
                        user_id,
                        movie_id: id
                    }
                });
        
                await knex("tags").insert(tagsInsert);
            }
        }

        movieNote.title = title ?? movieNote.title;
        movieNote.description = description ?? movieNote.description;
        movieNote.rating = rating ?? movieNote.rating;
        movieNote.updated_at = knex.fn.now();

        await knex("movies").where({ id: id }).first().update(movieNote);

        response.status(200).json();
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movies").where({ id: id }).delete();

        response.json()
    }

    async index(request, response) {
        const { title, tags } = request.query;
        const user_id = request.user.id;

        let movies;

        if(tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());

            movies = await knex("tags")
                .select([
                    "movies.id",
                    "movies.title",
                    "movies.description",
                    "movies.rating",
                    "movies.user_id"
                ])
                .where("movies.user_id", user_id)
                .whereLike("movies.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("movies", "movies.id", "tags.movie_id")
                .orderBy("movies.title")
        } else {
            movies = await knex("movies")
                .where({ user_id: user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("updated_at")
        }
        
        const userTags = await knex("tags").where({user_id});
        const moviesWithTags = movies.map(movie => {
            const movieTags = userTags.filter(tag => tag.movie_id === movie.id);

            return {
                ...movie,
                tags: movieTags
            }
        })
        
        response.json(moviesWithTags)
    }
}

module.exports = MoviesController;