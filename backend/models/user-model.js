const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// scure user password
UserSchema.pre("save", async function (next,) {
  try {
    const user = this;

    if (!user.isModified("password")) {
      next()
    }
    user.password = await bcrypt.hash(user.password, 10)
  } catch (error) {
    next(error)
  }
})

const UserModel = model("user", UserSchema)

module.exports = UserModel