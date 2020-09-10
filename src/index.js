var express = require("express");
let router = express.Router();

let Auth = require("./router/AuthRouter");
let Portofolio = require("./router/PortofolioRouter");
let Experience = require("./router/ExperienceRouter");
let Skill = require("./router/SkillRouter");
router.use("/auth/", Auth);
router.use("/portofolio", Portofolio);
router.use("/experience", Experience);
router.use("/skill", Skill);

module.exports = router;
