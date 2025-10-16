
const jwt = require("jsonwebtoken");
const { ZodError } = require("zod");

// generate jwt token
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

// structure zod errors on geting validation
const ZodStructureErorrs = (res, error) => {
  if (error instanceof ZodError) {

    const validationErrors = error.issues.map(issue => ({
      path: issue.path.join('.'), // Field name
      message: issue.message      // Error message
    }));

    return res.status(400).json({
      message: "Validation failed",
      errors: validationErrors
    });

  } else {
    console.error("An unexpected error occurred:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

}

module.exports = {generateToken, ZodStructureErorrs}