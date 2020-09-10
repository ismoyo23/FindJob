let express = require("express");
let router = express.Router();
let MessangerController = require("../controllers/MessangerController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");
// ===========================================================================
// router portofolio
router.get("/", AuthMidleware.verifyJwtToken, MessangerController.GetMessanger);
router.post(
  "/",
  AuthMidleware.verifyJwtToken,
  MessangerController.PostMessanger
);

router.delete(
  "/:id",
  AuthMidleware.verifyJwtToken,
  MessangerController.DeleteMessanger
);

module.exports = router;
