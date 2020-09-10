let express = require("express");
let router = express.Router();
let ExperienceController = require("../controllers/ExperienceController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");
// ===========================================================================
// router portofolio
router.get(
  "/",
  AuthMidleware.verifyJwtToken,
  ExperienceController.GetExperience
);
router.post(
  "/",
  AuthMidleware.verifyJwtToken,
  upload.single("image"),
  ExperienceController.PostExperience
);

router.put(
  "/:id",
  AuthMidleware.verifyJwtToken,
  upload.single("image"),
  ExperienceController.PutExperience
);

router.delete(
  "/:id",
  AuthMidleware.verifyJwtToken,
  ExperienceController.DeleteExperience
);

module.exports = router;
