// IMPORTS
require("express-async-errors");
const uploadConfig = require("./configs/upload")
const routes = require("./routes")
const AppError = require("./utils/AppError")
const cors = require("cors");
const express = require("express");

// INITIAL CONFIG
const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
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
