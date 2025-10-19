const express = require("express");
const cors = require("cors")
const authRouter = require("./routes/auth-route");
const contactRouter = require("./routes/contact-route");
const connectDB = require("./config/db");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express()
const PORT = 4000;


// heandling cors policy
var corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}
app.use(cors(corsOptions))


//
app.use(express.json())

connectDB()

app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);

})