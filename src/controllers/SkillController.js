let SkillModels = require("../models/SkillModels");
let helper = require("../helper/index");
// ==============================================================================
// portofolio

module.exports = {
  GetSkill: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let search =
        request.query.field === undefined
          ? ""
          : `WHERE ${request.query.field} LIKE '${request.query.search}'`;

      let result = await SkillModels.Skill(search);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PostSkill: async function (request, response) {
    try {
      let setData = request.body;

      let result = await SkillModels.CreateSkill(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  DeleteSkill: async function (request, response) {
    let id = `WHERE id_skill = '${request.params.id}'`;
    try {
      let result = await SkillModels.DestroySkill(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
