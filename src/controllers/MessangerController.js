let MessangerModels = require("../models/MessangerModels");
let helper = require("../helper/index");
// ==============================================================================
// portofolio

module.exports = {
  GetMessanger: async function (request, response) {
    let sender = request.query.sender_id;
    let receiver = request.query.receiver_id;
    try {
      // conditions for paginations, search, sort

      let result = await MessangerModels.Messanger(sender, receiver);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  PostMessanger: async function (request, response) {
    let setData = request.body;
    try {
      let result = await MessangerModels.CreateMessanger(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  DeleteMessanger: async function (request, response) {
    let id = `WHERE id_messanger = '${request.params.id}'`;
    try {
      let result = await MessangerModels.DestroyMessanger(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
