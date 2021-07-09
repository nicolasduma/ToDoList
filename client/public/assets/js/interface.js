let usedThame = localStorage.getItem("thame") ? localStorage.getItem("thame") == "true" : true
setThame(usedThame)

    document.querySelector("#change-thame").addEventListener("click", () => {
        usedThame = !usedThame
        setThame(usedThame)
        localStorage.setItem("thame", usedThame.toString())
    })

    document.querySelector("#description-new-task").addEventListener("keyup", keyOfNewDescInput)
})

function setThame(usedThame) {
    let thames = usedThame ? ["light", "dark"] : ["dark", "light"]

    document.querySelectorAll("." + thames[1]).forEach(element => {
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
