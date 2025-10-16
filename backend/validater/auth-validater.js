const { z } = require("zod")

const signupValidate = z.object({
  userName: z.string({
    required_error: "Name is required"
  }).min(3, { message: "Name must be at least 3 characters" }),

  email: z.string({
    required_error: "Email is required"
  }).email({ message: "Invalid Email format" }),

  password: z.string({
    required_error: "Password is required"
  })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(12, { message: "Password must be less than 12 characters" }),

  isAdmin: z.boolean({
    invalid_type_error: "isAdmin must be a boolean"
  })
})


const loginValidate = z.object({
  email: z.string({
    required_error: "Email is required"
  }).email({ message: "Invalid Email format" }),

  password: z.string({
    required_error: "Password is required"
  })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(12, { message: "Password must be less than 12 characters" }),

})

module.exports = { signupValidate, loginValidate }