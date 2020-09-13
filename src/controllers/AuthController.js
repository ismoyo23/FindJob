let helper = require("../helper/index");
let AuthModels = require("../models/AuthModels");
let PasswordHash = require("password-hash");
let jwt = require("jsonwebtoken");
let config = require("../config/global");

module.exports = {
  Register: async function (request, response) {
    let setData = {
      username: request.body.username,
      email: request.body.email,
      password: PasswordHash.generate(request.body.password),
      address: request.body.address,
      phone: request.body.phone,
      company: request.body.company,
      role: request.body.role,
    };
    try {
      let result = await AuthModels.AuthRegister(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  Login: async function (request, response) {
    let setData = {
      email: request.body.email,
      password: request.body.password,
    };
    try {
      let result = await AuthModels.AuthLogin(setData);
      let tokenData = {
        ...result[0],
      };
      delete result[0].password;
      let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
        expiresIn: "2d",
      });
      result[0].AccessToken = AccessToken;
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  RefreshToken: (request, response) => {
    let verify = request.headers.authorization;
    const decoded = jwt.verify(verify, config.jwtSecretKey);
    delete decoded.exp;
    delete decoded.iat;
    let tokenData = {
      ...decoded,
    };
    let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
      expiresIn: "5d",
    });
    decoded.RefreshToken = AccessToken;

    return helper.response(response, "success", decoded, 201);
  },

  GetUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let search =
        request.query.field === undefined
          ? ""
          : `WHERE ${request.query.field} LIKE '${request.query.search}'`;

      let sort =
        request.query.colums === undefined
          ? ""
          : `ORDER BY ${request.query.colums} ASC`;

      let pagination =
        request.query.page == null
          ? ""
          : `  LIMIT 12 OFFSET ${request.query.page}`;
      let result = await AuthModels.GetUsers(search, sort, pagination);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  deleteUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      id = request.params.id;

      let result = await AuthModels.deleteData(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  updateUsers: async function (request, response) {
    // conditions for paginations, search, sort
    let id = request.params.id;
    let setData = request.body;
    try {
      let result = await AuthModels.UpdatedUsers(setData, id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  updateProfile: async function (request, response) {
    // conditions for paginations, search, sort
    let id = request.params.id;
    let setData = { image: request.file.filename };
    try {
      let result = await AuthModels.ProfileUpdate(setData, id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
