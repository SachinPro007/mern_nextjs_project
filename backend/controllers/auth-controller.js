const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")

const auth = (req, res) => {
  try {
    res.status(200).json({ success: true, message: "I got the auth api requst" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}



const register = async (req, res) => {
  try {
    const {userName, email, password, isAdmin} = req.body
    if (!email) {
      return res.status(401).json({ success: false, message: "Something went wrong" })
    }
    // user exist
    const userExist = await UserModel.find({ email })

    if (!userExist || userExist.length !== 0) {
      return res.status(201).json({ success: false, message: "User already exist" })
    }

    // scure hashPassword
    // const hashPassword = await bcrypt.hash(password, 10)    
    
    // if not exist then add on database
    const newUser = new UserModel({ ...req.body})
    
    await UserModel.insertOne(newUser)    

    res.status(200).json({ success: true, message: "User registertion successful", user: newUser })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


module.exports = { auth, register }