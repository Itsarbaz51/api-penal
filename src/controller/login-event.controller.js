import LoginEventService from "../service/login-event.service.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class LoginEventController {
  // GET ALL
  static getAll = async (req, res) => {
    const result = await LoginEventService.getAll(req.query, req.user);

    return res.json(ApiResponse.success(result));
  };
}

export default LoginEventController;
