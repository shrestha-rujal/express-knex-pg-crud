import { Router } from "express";

import * as userController from "../controllers/userController";

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUser);
router.post("/", userController.createUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

router.get("/:userId/posts", userController.getUserPosts);

export default router;
