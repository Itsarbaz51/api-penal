import BbpsService from "../../service/bbps/bbps.service";

class BbpsController {
  static async execute(req, res) {
    const response = await BbpsService.execute({
      providerCode: req.body.provider,
      method: req.body.method,
      payload: req.body.payload,
      providerConfig: {},
    });

    return res.json(response);
  }
}

export default BbpsController;
