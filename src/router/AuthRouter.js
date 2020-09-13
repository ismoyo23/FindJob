let express = require("express");
let router = express.Router();
let AuthUser = require("../controllers/AuthController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");
const { single } = require("../multer/settings");
router.post("/register", AuthUser.Register);
router.post("/login", AuthUser.Login);
router.post("/refreshtoken", AuthUser.RefreshToken);
router.get("/user", AuthMidleware.verifyJwtToken, AuthUser.GetUsers);
router.delete("/user/:id", AuthUser.deleteUsers);
router.put("/user/:id", AuthUser.updateUsers);
router.put("/user/profile/:id", upload.single("image"), AuthUser.updateProfile);

module.exports = router;
