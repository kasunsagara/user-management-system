import express from "express";
import { getUser, getUserByName, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.get("/:firstName", getUserByName);

userRouter.post("/", createUser);

userRouter.put("/:firstName", updateUser);

userRouter.delete("/:firstName", deleteUser);

export default userRouter;