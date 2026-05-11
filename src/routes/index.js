import { Router } from "express";
import authRoute from "./auth.route.js";
import packageRoute from "./package.routes.js";
import userRoute from "./user.routes.js";
import serviceRoute from "./service.route.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/packages", packageRoute);
router.use("/users", userRoute);
router.use("/services", serviceRoute);

export default router;
