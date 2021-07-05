const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: {type: String, minlength: 1, maxlength: 35},
    description: {type: String, minlength: 1, riquired: true},
    category: {type: Boolean, default: true, required: true} // true = Personal & false = Work
})

module.exports = mongoose.model("Task", taskSchema)
