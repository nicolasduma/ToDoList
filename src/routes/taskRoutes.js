const router = require("express").Router()

const taskController = require("../controllers/taskController")

router.post("/", taskController.addTask)

module.exports = router
