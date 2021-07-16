function changeDoneInput(element, id) {
    element.dataset.done = element.dataset.done == "false" ? "true" : "false"

    fetch(`update/${id}/${element.dataset.done}`, { method: "PUT" }).then(res => {

        res.text().then(task => {
            console.log(`>>> UPDATE: ${task} <<<`)
        })

    }).catch(error => {

        console.log(error)

    })
}

function deleteTask(id) {
    fetch("delete/" + id, {method: "DELETE"}).then(res => {

        res.text().then(id => {
            document.getElementById(id).remove()
        })
        
    }).catch(error => {

        console.log(error)

    })
}

addNewTask = async () => {
    event.preventDefault()
    
    let task = {
        description: document.querySelector("#description-new-task").value.trim(),
        category: document.querySelector("#category-new-task").value.trim(),
    }

    if ((task.description && task.description != "") && (task.category == "true" || task.category == "false")) sendRequest(task)
    else alert("Error: undefined datas!")
}

function sendRequest(body) {
    let request = new XMLHttpRequest()
    request.open("POST", "http://192.168.0.108:7000/task/add", true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = () => { 
        let res = JSON.parse(request.responseText)

        if (request.status === 200) updateScreenWidthNewTask(res)

        else if (request.status === 400) {
            alert(`Error: couldn't save task!\n${res.error.message}`)
            console.log(res.error.message)
            console.log(res.body)

            document.querySelector("#description-new-task").value = res.body.description
            document.querySelector("#category-new-task").indexSelected = res.body.category == "true" ? 0 : 1
        }
    }
}
