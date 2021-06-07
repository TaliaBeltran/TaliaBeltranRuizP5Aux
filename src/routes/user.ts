import { Router } from "express";
import { userControllers } from "../controllers/user";

const router = Router();

router.get("/", userControllers.index);
router.get("/profile/:id", userControllers.profile);
router.post("/signUp", userControllers.signUp);
router.put("/edit/:id", userControllers.edit);
router.delete("/delete/:id", userControllers.delete);

export default router;