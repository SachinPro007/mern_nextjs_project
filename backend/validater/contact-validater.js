const {z} = require("zod")


const contactValidate = z.object({
  userName: z.string({
    required_error: "Name is required"
  }).min(3, { message: "Name must be at least 3 characters" }),

  email: z.string({
    required_error: "Email is required"
  }).email({ message: "Invalid Email format" }),

  message: z.string({
    required_error: "Message is required"
  }).min(3, { message: "Message must be at least 3 characters" }),
})

module.exports = {contactValidate}