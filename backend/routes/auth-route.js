const { auth, register, login } = require("../controllers/auth-controller")
const { signupValidateMid, loginValidateMid } = require("../middlewares/authvalidate-mid")

const router = require("express").Router()

router.get("/", auth)
router.post("/register", signupValidateMid, register)
router.post("/login", loginValidateMid, login)



module.exports = router