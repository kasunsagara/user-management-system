import express from "express";
import { getUser, getUserByName, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.get("/:name", getUserByName);

userRouter.post("/", createUser);

userRouter.put("/:name", updateUser);

userRouter.delete("/:name", deleteUser);

export default userRouter;