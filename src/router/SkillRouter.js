let express = require("express");
let router = express.Router();
let SkillController = require("../controllers/SkillController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");

router.get("/", AuthMidleware.verifyJwtToken, SkillController.GetSkill);
router.post(
  "/",
  AuthMidleware.verifyJwtToken,
  upload.single("image"),
  SkillController.PostSkill
);

router.delete(
  "/:id",
  AuthMidleware.verifyJwtToken,
  SkillController.DeleteSkill
);

module.exports = router;
