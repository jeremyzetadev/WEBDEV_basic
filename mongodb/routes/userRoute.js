import express from "express";
import {createUser, getAllUsers,updateUser,deleteUser} from "../controller/userController.js"

const route = express.Router();

route.post("/create",createUser);
route.get("/getAllUsers",getAllUsers);
route.put("/update/:id",updateUser);
route.delete("/delete/:id",deleteUser)

export default route;