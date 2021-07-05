const mongoose = require("mongoose")

const teskSchema = mongoose.Schema({
    title: {type: String, minlength: 1, maxlength: 35},
    description: {type: String, minlength: 1},
})

module.exports = mongoose.model("Task", taskSchema)
