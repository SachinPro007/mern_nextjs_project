const { ZodStructureErorrs } = require("../config/auth");
const UserModel = require("../models/user-model");
const { signupValidate, loginValidate } = require("../validater/auth-validater");
const jwt = require("jsonwebtoken")



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

const userAuthMid = async (req, res, next) => {  
  const token = req.cookies.token

  if(!token){
    return res.status(401).json({message: "Unauthorized HTTP, Token not provided"})
  }
  

  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const user = await UserModel.findOne({email: isVerified.email}).select({password: 0}) 
    req.user = user   

    next()
    
  } catch (error) {    
    return res.status(500).json({ msg: error.message})
  }

}

module.exports = { signupValidateMid, loginValidateMid, userAuthMid };