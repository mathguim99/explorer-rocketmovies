const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.routes")
const moviesRouter = require("./movies.routes")
const tagsRouter = require("./tags.routes")

routes.use("/users", usersRouter)
routes.use("/movies", moviesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;