const { Router } = require("express");
const moviesRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const MoviesController = require("../controllers/MoviesController");
const moviesController = new MoviesController();

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.get("/:id", moviesController.show)
moviesRoutes.get("/", moviesController.index)
moviesRoutes.post("/", moviesController.create)
moviesRoutes.delete("/:id", moviesController.delete)
moviesRoutes.put("/:id", moviesController.update)

module.exports = moviesRoutes;