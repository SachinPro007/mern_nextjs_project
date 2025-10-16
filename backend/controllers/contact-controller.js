const ContactModel = require("../models/contact-model")

const contact = async(req, res) => {
  try {
    const query = req.body
    if(!query){
      res.status(400).json({message: "Something went wrong"})
    }

    const createQuery = new ContactModel(query)
    await ContactModel.insertOne(createQuery)
    
    res.status(201).json({message: "Got your requist successfuly", query: createQuery})
  } catch (error) {
    return res.status(500).json({message: error.message})
    
  }
}

module.exports = {contact}