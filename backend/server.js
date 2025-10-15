const express = require("express");
const authRouter = require("./routes/auth-route");
const app = express()
const PORT = 3000;

app.use(express.json())

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
  
})