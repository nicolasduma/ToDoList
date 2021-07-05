const Task = require("../models/Task")

module.exports = {

    addTask: async (req, res) => {
        const task = new Task({
            title: req.body.title ? req.body.title : null,
            description: req.body.description,
            category: req.body.category,
        })

        res.send(await task.save())
    }

}
