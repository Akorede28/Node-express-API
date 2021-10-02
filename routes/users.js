import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// using a router coming from express
// with this we initialize our router
const router = express.Router();

// All routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/", deleteUser);

router.patch("/:d", updateUser);

// we export default router so as to be able to use it in index.js
export default router;
