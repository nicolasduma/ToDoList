const router = require("express").Router()

const taskController = require("../controllers/taskController")

router.get("/all", taskController.getTasks)

router.post("/add", taskController.addTask)

module.exports = router
