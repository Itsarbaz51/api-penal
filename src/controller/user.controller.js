import UserService from "../service/user.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class UserController {
  static async create(req, res) {
    const user = await UserService.createUser(req.body, req.user);

    return res.json(ApiResponse.success(user, "User created successfully"));
  }

  static async getAll(req, res) {
    const users = await UserService.getUsers(req?.query);

    return res.json(ApiResponse.success(users, "Users fetched successfully"));
  }

  static async credentials(req, res) {
    const credentials = await UserService.getUserCredentials(req.params.id);

    return res.json(ApiResponse.success(credentials, "Credentials fetched"));
  }

  static async getOne(req, res) {
    const user = await UserService.getUser(req.params.id);

    return res.json(ApiResponse.success(user, "User fetched successfully"));
  }

  static async update(req, res) {
    const user = await UserService.updateUser(
      req.params.id,
      req.body,
      req.file
    );

    return res.json(ApiResponse.success(user, "User updated successfully"));
  }

  static async delete(req, res) {
    await UserService.deleteUser(req.params.id);

    return res.json(ApiResponse.success(null, "User deleted successfully"));
  }
}

export default UserController;
