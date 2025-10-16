const { ZodStructureErorrs } = require("../config/auth");
const { signupValidate, loginValidate } = require("../validater/auth-validater");


const signupValidateMid = (req, res, next) => {
  try {
    signupValidate.parse(req.body);
    next();

  } catch (error) {
    ZodStructureErorrs(res, error)
  }
};



const loginValidateMid = (req, res, next) => {
  try {
    loginValidate.parse(req.body)
    next()

  } catch (error) {
    ZodStructureErorrs(res, error)
  }
}

module.exports = { signupValidateMid, loginValidateMid };