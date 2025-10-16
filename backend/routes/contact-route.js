const { contact } = require("../controllers/contact-controller")
const { contactValidateMid } = require("../middlewares/contact-middleware")

const router = require("express").Router()

router.post("/", contactValidateMid, contact)

module.exports = router