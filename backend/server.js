const express = require("express");
const authRouter = require("./routes/auth-route");
const contactRouter = require("./routes/contact-route");
const connectDB = require("./config/db");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express()
const PORT = 3000;

app.use(express.json())

connectDB()

app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
  
})