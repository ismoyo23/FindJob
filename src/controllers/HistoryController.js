let HistoryModels = require("../models/HistoryModels");
let helper = require("../helper/index");
// ==============================================================================
// portofolio

module.exports = {
  HistoryController: async function (request, response) {
    let search = request.query.search;
    try {
      // conditions for paginations, search, sort

      let result = await HistoryModels.History(search);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
