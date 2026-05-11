import { Router } from "express";
import authRoute from "./auth.route.js";
import packageRoute from "./package.routes.js";
import userRoute from "./user.routes.js";
import serviceRoute from "./service.route.js";
import providerRoute from "./provider.route.js";
import serviceProviderRoute from "./service-provider.route.js";
import commissionSettingRoute from "./commission-setting.route.js";
import userLimitRoute from "./user-limit.route.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/packages", packageRoute);
router.use("/users", userRoute);
router.use("/services", serviceRoute);
router.use("/providers", providerRoute);
router.use("/service-provider", serviceProviderRoute);
router.use("/commission-settings", commissionSettingRoute);
router.use("/user-limit", userLimitRoute);

export default router;
