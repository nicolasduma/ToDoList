const router = require("express").Router()

const taskController = require("../controllers/taskController")

router.get("/all", taskController.getTasks)

router.post("/add", taskController.addTask)

router.delete("/delete/:id", taskController.deleteTask)

module.exports = router
