let express = require("express");
let router = express.Router();
let PortofolioController = require("../controllers/PortofolioController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");
// ===========================================================================
// router portofolio
router.get(
  "/",
  AuthMidleware.verifyJwtToken,
  PortofolioController.GetPortofolio
);
router.post(
  "/",
  AuthMidleware.verifyJwtToken,
  upload.single("image"),
  PortofolioController.PostPortofolio
);

router.put(
  "/:id",
  AuthMidleware.verifyJwtToken,
  upload.single("image"),
  PortofolioController.PutPortofolio
);

router.delete(
  "/:id",
  AuthMidleware.verifyJwtToken,
  PortofolioController.DeletePortofolio
);

module.exports = router;
