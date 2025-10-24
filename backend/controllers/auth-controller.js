const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const { generateToken } = require("../config/auth")
require("dotenv").config()

const auth = (req, res) => {
  try {
    res.status(200).json({ success: true, message: "I got the auth api requst" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


const register = async (req, res) => {
  try {
    const { email } = req.body
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
    const newUser = new UserModel({ ...req.body })
    await UserModel.insertOne(newUser)


    res.status(201).json({
      success: true,
      message: "User registertion successful",
      token: generateToken(newUser),
      userID: newUser._id.toString()
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const userExist = await UserModel.findOne({ email })

    if (!userExist) {
      return res.status(401).json({ success: false, message: "Invalid user" })
    }

    const user = await bcrypt.compare(password, userExist.password)

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid User" })
    }

    const userToken = generateToken(userExist)
    res.cookie("token", userToken)

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: userToken,
      userID: userExist._id.toString()
    })


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

const user = async (req, res) => {

  try {
    const userData = req.user;
    return res.status(200).json({ success: true, user: userData })

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }

}


module.exports = { auth, register, login, user }