const {hash, compare} = require("bcrypt")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const userExists = await knex("users").where({ email: email }).first();

        if (userExists) {
            throw new AppError("This e-mail is already in use.")
        }
        
        const hashedPassword = await hash(password, 6)

        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        })

        response.status(201).json()
    }

    async update(request, response) {
        const { name, email, password, new_password } = request.body;
        const user_id = request.user.id;

        const user = await knex("users").where({ id: user_id }).first();

        if (!password) {
            throw new AppError("You need to inform your password to edit your profile informations.")
        }

        const passwordMatches = await compare(password, user.password)
        
        if (!passwordMatches) {
            throw new AppError("Your password is incorrect.")
        }

        if (new_password) {
            const hashedNewPassword = await hash(new_password, 6)
            user.password = hashedNewPassword
        }

        const userWithUpdatedEmail = await knex("users").where({ email: email }).first();

        if (email && userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("This e-mail is already in use.")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.updated_at = knex.fn.now()

        await knex("users")
            .where({ id: user_id }).first()
            .update(user)

        response.status(200).json()
    }
}

module.exports = UsersController;