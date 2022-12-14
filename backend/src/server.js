// INITIAL CONFIG
require("express-async-errors");
const express = require("express");
const app = express();
app.use(express.json())

// IMPORTS
const routes = require("./routes")
const AppError = require("./utils/AppError")

app.use(routes)

// EXCEPTIONS
app.use( (error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = 3333;
app.listen(3333, () => console.log(`Server is listening on port ${PORT}`))
