const auth = (req, res) => {
  try {
    res.status(200).json({success: true, message: "I got the auth api requst"})   
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
}



const register = (req, res) => {
  try {
    res.status(200).json({success: true, message: "User registertion successful", user: req.body})   
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
}


module.exports = {auth, register}