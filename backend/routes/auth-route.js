const { auth, register } = require("../controllers/auth-controller")

const router = require("express").Router()

router.get("/", auth)
router.post("/register", register)





module.exports = router