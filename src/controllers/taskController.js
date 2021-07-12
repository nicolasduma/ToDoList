const Task = require("../models/Task")

module.exports = {

    getTasks: async (req, res) => {
        try {

            let tasks = await Task.find({})
            res.render("main", { tasks })

        } catch (error) {

            res.status(400).send(error)

        }
    },

    addTask: async (req, res) => {
        try {

            const task = new Task({
                description: req.body.description,
                category: req.body.category,
            })

            await task.save()

            res.redirect("../task/all")

        } catch (error) {

            res.status(400).send(error)

        }
    },

    updateTask: async (req, res, next) => {
        try {

            const id = req.params.id

            let task = await Task.findById(id)

            task.done = req.params.done == "true" ? true : false

            res.send(await Task.findByIdAndUpdate(id, task))

        } catch (error) {

            res.send(error)

        }
    },

    deleteTask: async (req, res) => {
        try {

            const id = req.params.id

            await Task.findByIdAndDelete(id)

            res.send(id)

        } catch (error) {

            res.send(error)

        }
    },

}
