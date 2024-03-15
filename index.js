
// import data from './data.json' assert {type:'json'}
var count = 0
var data = [{
    'task':"I want to complete my project", 'id':0
},
{
    'task': 'Go for walk', 'id': 1
}
]
var form = document.getElementById('form')


function addData(task){
    var holder = document.getElementById('list')
    let newLi = document.createElement("Li")
    let newP = document.createElement("p")
    let newButton = document.createElement("button")

    newP.innerHTML = task
    newButton.innerHTML = "X"
    newP.className = 'task'
    newButton.className = 'delete'
    newLi.className = "item"
    
    newLi.appendChild(newP)
    newLi.appendChild(newButton)

    holder.appendChild(newLi)

    newButton.addEventListener('click', () => {
        newLi.remove()
    })
}

function submitButton(event){
    var task = document.getElementById('task')
    if (task.value != ""){
        addData(task.value)
    }
    task.value = "";
    event.preventDefault();
}

function callData(){
    for (let i in data){
        data[i].id = i
        count  = i + 1
        addData(data[i].task)
    }
}
console.log(typeof data)
callData()
form.addEventListener('submit', submitButton)
