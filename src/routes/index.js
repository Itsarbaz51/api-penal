import { Router } from "express";
import authRoute from "./auth.route.js";
import packageRoute from "./package.routes.js";
import userRoute from "./user.routes.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/packages", packageRoute);
router.use("/users", userRoute);

export default router;
