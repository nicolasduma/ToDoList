require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")

const taskRoutes = require("./src/routes/taskRoutes")

mongoose.connect(process.env.DB_CONNECTED, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log(">>> DB connected <<<") }
).catch(error => { console.log(error) })

app.use("/task", express.urlencoded({ extended: true }), taskRoutes)

app.listen(process.env.PORT, () => {
    console.log(`>>> Server running on port ${process.env.PORT} <<<`)
})
