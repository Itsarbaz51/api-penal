import AuditLogService from "../service/audit-log.service.js";

import { ApiResponse } from "../utils/ApiResponse.js";

class AuditLogController {
  // GET ALL
  static getAll = async (req, res) => {
    const result = await AuditLogService.getAll(req.query, req.user);

    return res.json(ApiResponse.success(result));
  };
}

export default AuditLogController;
