const { auth, register, login } = require("../controllers/auth-controller")

const router = require("express").Router()

router.get("/", auth)
router.post("/register", register)
router.post("/login", login)





module.exports = router