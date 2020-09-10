let PortofolioModels = require("../models/PortofolioModels");
let helper = require("../helper/index");
// ==============================================================================
// portofolio

module.exports = {
  GetPortofolio: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let search =
        request.query.field === undefined
          ? ""
          : `WHERE ${request.query.field} LIKE '${request.query.search}'`;

      let result = await PortofolioModels.Portofolio(search);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PostPortofolio: async function (request, response) {
    try {
      let setData = {
        name: request.file.filename,
        id_users: request.body.id_users,
      };

      let result = await PortofolioModels.CreatePortofolio(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PutPortofolio: async function (request, response) {
    let id = `WHERE id = '${request.params.id}'`;
    let setData = {
      name: request.file.filename,
      id_users: request.body.id_users,
    };
    try {
      let result = await PortofolioModels.UpdatePortofolio(setData, id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  DeletePortofolio: async function (request, response) {
    let id = `WHERE id = '${request.params.id}'`;
    try {
      let result = await PortofolioModels.DestroyPortofolio(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
