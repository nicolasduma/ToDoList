let usedThame = localStorage.getItem("thame") ? localStorage.getItem("thame") == "true" : true
setThame(usedThame)

document.addEventListener("DOMContentLoaded", () => {
    let btnThame = document.querySelector("#change-thame")


    btnThame.addEventListener("click", () => {
        usedThame = !usedThame
        setThame(usedThame)
        localStorage.setItem("thame", usedThame.toString())
    })
})

function setThame(usedThame) {
    let thames = usedThame ? ["light", "dark"] : ["dark", "light"]

    document.querySelectorAll("." + thames[1]).forEach(element => {
        element.classList.remove(thames[1])
        element.classList.add(thames[0])
    })
}
