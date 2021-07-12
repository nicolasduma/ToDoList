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
            console.log(id)
            document.getElementById(id).remove()
        })
        
    }).catch(error => {

        console.log(error)

    })
}
