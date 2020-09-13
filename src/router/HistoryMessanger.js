let express = require("express");
let router = express.Router();
let HistoryController = require("../controllers/HistoryController");
let AuthMidleware = require("../midleware/Auth");
// ===========================================================================
// router portofolio
router.get(
  "/",
  AuthMidleware.verifyJwtToken,
  HistoryController.HistoryController
);

module.exports = router;
