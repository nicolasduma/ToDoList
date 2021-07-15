let usedThame = localStorage.getItem("thame") ? localStorage.getItem("thame") == "true" : true

document.addEventListener("DOMContentLoaded", () => {
    setThame(usedThame)

    document.querySelector("#change-thame").addEventListener("click", () => {
        usedThame = !usedThame
        setThame(usedThame, "transition")
        localStorage.setItem("thame", usedThame.toString())
    })

    document.querySelector("#description-new-task").addEventListener("keyup", keyOfNewDescInput)

    document.querySelectorAll(".task-completed").forEach(element => {
        if (element.dataset.done == "true") element.setAttribute("checked", "checked")
    })
})

function setThame(usedThame, addClass) {
    let thames = usedThame ? ["light", "dark"] : ["dark", "light"]

    const buttonContent = document.querySelector("#change-thame").children[0]

    buttonContent.classList.remove(usedThame ? "uil-sun" : "uil-moon")
    buttonContent.classList.add(usedThame ? "uil-moon" : "uil-sun")

    document.querySelectorAll("." + thames[1]).forEach(element => {
        if (addClass) element.classList.add(addClass)
        element.classList.remove(thames[1])
        element.classList.add(thames[0])
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
    let thame = usedThame ? "light" : "dark"
    let newTaskElement = `
    <li id="${task._id}" class="continer-task d-flex align-items-center bg-primary ft-color-secondary ${thame}">
        <div class="conteiner-task-completed d-flex justify-content-center align-items-center">
            <input type="checkbox" data-done="${task.done}" onchange="changeDoneInput(this, '${task._id})" id="checkbox${task._id}" class="task-completed d-none category-${task.category} ${thame}">
            <label for="checkbox${task._id}"></label>
        </div>

        <p class="description-task">
            ${task.description}
        </p>
        <button onclick="deleteTask('${task._id}')" aria-label="Delete" class="btn-delete hover-tooltip ${thame}"><i class="uil uil-trash ft-color-secondary ${thame}"></i></button>
    </li>
    `
    const contentAllTasks = document.getElementById("content-all-tasks")

    contentAllTasks.innerHTML = newTaskElement + contentAllTasks.innerHTML

    document.querySelector("#description-new-task").value = ""

    const actionsForm = document.querySelector("#actions-form")
    actionsForm.classList.remove("opacity-100")
    actionsForm.classList.add("opacity-0")

    document.querySelector("#category-new-task").selectedIndex = 0
}
