const {Schema, model} = require("mongoose")


const ContactSchema = new Schema({
  userName: {type: String, require: true},
  email: {type: String, require: true},
  message: {type: String, require: true},
})

const ContactModel = model("contect", ContactSchema)

module.exports = ContactModel