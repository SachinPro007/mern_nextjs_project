const { auth, register, login, user } = require("../controllers/auth-controller")
const { signupValidateMid, loginValidateMid, userAuthMid } = require("../middlewares/authvalidate-mid")

const router = require("express").Router()

router.get("/", auth)
router.post("/register", signupValidateMid, register)
router.post("/login", loginValidateMid, login)
router.get("/user", userAuthMid, user)



module.exports = router 