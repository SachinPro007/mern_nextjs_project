
const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  return jwt.sign(
    {
      userID: user._id.toString(),
      email: user.email,
      isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "30d" }
  )
}

module.exports = {generateToken}