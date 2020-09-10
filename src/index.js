var express = require("express");
let router = express.Router();

let Auth = require("./router/AuthRouter");
let Portofolio = require("./router/PortofolioRouter");
let Experience = require("./router/ExperienceRouter");
let Skill = require("./router/SkillRouter");
let Messanger = require("./router/MessangerRouter");
let History = require("./router/HistoryMessanger");
router.use("/auth/", Auth);
router.use("/portofolio", Portofolio);
router.use("/experience", Experience);
router.use("/skill", Skill);
router.use("/Messanger", Messanger);
router.use("/History", History);

module.exports = router;
