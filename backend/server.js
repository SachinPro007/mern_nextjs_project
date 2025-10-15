const express = require("express");
const authRouter = require("./routes/auth-route");
const connectDB = require("./config/db");
const app = express()
const PORT = 3000;

app.use(express.json())

connectDB()

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
  
})