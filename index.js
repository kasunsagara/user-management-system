import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app = express();

const mongoUrl = "mongodb+srv://admin:123@cluster0.yonnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.listen(
    3000,
    () => {
        console.log("Server is running on port 3000");
    }
);