const { contactValidate } = require("../validater/contact-validater");


const contactValidateMid = (req, res, next) => {
  try {
    contactValidate.parse(req.body)
    next()

  } catch (error) {
    const validationErrors = error.issues.map(issue => ({
      path: issue.path.join('.'),
      message: issue.message
    }));
    next(validationErrors)

  }
}

module.exports = { contactValidateMid }