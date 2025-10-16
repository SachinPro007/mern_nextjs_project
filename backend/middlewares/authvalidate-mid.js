const { ZodStructureErorrs } = require("../config/auth");
const { signupValidate, loginValidate } = require("../validater/auth-validater");


const signupValidateMid = (req, res, next) => {
  try {
    signupValidate.parse(req.body);
    next();

  } catch (error) {    
    // console.log(ZodStructureErorrs(res, error));
    const validationErrors = error.issues.map(issue => ({
      path: issue.path.join('.'),
      message: issue.message
    }));

    next(validationErrors)
  }
};



const loginValidateMid = (req, res, next) => {
  try {
    loginValidate.parse(req.body)
    next()

  } catch (error) {
    // ZodStructureErorrs(res, error)
    const validationErrors = error.issues.map(issue => ({
      path: issue.path.join('.'),
      message: issue.message
    }));

    next(validationErrors)
  }
}

module.exports = { signupValidateMid, loginValidateMid };