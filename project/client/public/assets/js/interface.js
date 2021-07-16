let usedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") == "true" : true

document.addEventListener("DOMContentLoaded", () => {
    setTheme(usedTheme)

    document.querySelector("#change-theme").addEventListener("click", () => {
        usedTheme = !usedTheme
        setTheme(usedTheme, "transition")
        localStorage.setItem("theme", usedTheme.toString())
    })

    document.querySelector("#description-new-task").addEventListener("keyup", keyOfNewDescInput)

    document.querySelectorAll(".task-completed").forEach(element => {
        if (element.dataset.done == "true") element.setAttribute("checked", "checked")
    })
})

function setTheme(usedTheme, addClass) {
    let themes = usedTheme ? ["light", "dark"] : ["dark", "light"]

    const buttonContent = document.querySelector("#change-theme").children[0]

    buttonContent.classList.remove(usedTheme ? "uil-sun" : "uil-moon")
    buttonContent.classList.add(usedTheme ? "uil-moon" : "uil-sun")

    document.querySelectorAll("." + themes[1]).forEach(element => {
        if (addClass) element.classList.add(addClass)
        element.classList.remove(themes[1])
        element.classList.add(themes[0])
    })
}

function keyOfNewDescInput(event) {
    if (event.target.value != "") updateClasses = ["opacity-0", "opacity-100"]
    else if (event.target.value == "") updateClasses = ["opacity-100", "opacity-0"]

    let element = document.querySelector("#actions-form")
    element.classList.remove(updateClasses[0])
    element.classList.add(updateClasses[1])
}

function updateScreenWidthNewTask(task) {
    let theme = usedTheme ? "light" : "dark"
    let newTaskElement = `
    <li id="${task._id}" class="continer-task d-flex align-items-center bg-primary ft-color-secondary ${theme}">
        <div class="conteiner-task-completed d-flex justify-content-center align-items-center">
            <input type="checkbox" data-done="${task.done}" onchange="changeDoneInput(this, '${task._id}')" id="checkbox${task._id}" class="task-completed d-none category-${task.category} ${theme}">
            <label for="checkbox${task._id}"></label>
        </div>

        <p class="description-task">
            ${task.description}
        </p>
        <button onclick="deleteTask('${task._id}')" aria-label="Delete" class="btn-delete hover-tooltip ${theme}"><i class="uil uil-trash ft-color-secondary ${theme}"></i></button>
    </li>
    `
    const contentAllTasks = document.getElementById("content-all-tasks")

    contentAllTasks.innerHTML = newTaskElement + contentAllTasks.innerHTML

    document.querySelectorAll(".task-completed").forEach(element => {
        if (element.dataset.done == "true") element.setAttribute("checked", "checked")
    })

    document.querySelector("#description-new-task").value = ""

    const actionsForm = document.querySelector("#actions-form")
    actionsForm.classList.remove("opacity-100")
    actionsForm.classList.add("opacity-0")

    document.querySelector("#category-new-task").selectedIndex = 0
}
