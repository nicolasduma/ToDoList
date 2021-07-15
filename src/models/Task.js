const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    description: {type: String, minlength: 1, maxlength: 30, riquired: true},
    category: {type: Boolean, default: true, required: true}, // true = Personal & false = Work
    done: {type: Boolean, default: false, required: true},
})

module.exports = mongoose.model("Task", taskSchema)
