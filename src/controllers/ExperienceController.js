let ExperienceModels = require("../models/ExperienceModels");
let helper = require("../helper/index");
// ==============================================================================
// portofolio

module.exports = {
  GetExperience: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let search =
        request.query.field === undefined
          ? ""
          : `WHERE ${request.query.field} LIKE '${request.query.search}'`;

      let result = await ExperienceModels.Experience(search);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PostExperience: async function (request, response) {
    try {
      let setData = request.body;

      let result = await ExperienceModels.CreateExperience(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PutExperience: async function (request, response) {
    let id = `WHERE id = '${request.params.id}'`;
    let setData = request.body;
    try {
      let result = await ExperienceModels.UpdateExperience(setData, id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  DeleteExperience: async function (request, response) {
    let id = `WHERE id = '${request.params.id}'`;
    try {
      let result = await ExperienceModels.DestroyExperience(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
