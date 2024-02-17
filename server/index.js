const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config({ path: "./.env" })

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())

// routes
app.use("/api/v1/admin", require("./routes/userRoutes"))

// server
mongoose.connection.once("open", () => {
    console.log("Mongo Connected")
    app.listen(process.env.PORT, console.log("Server Ruunning"))
})