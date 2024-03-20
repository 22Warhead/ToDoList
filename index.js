
var count = 0
var total_task = 0
var completed = 0
var remaining = 0
var isToggled = false
var data = [{
    'task':"I want to complete my project", 'id':0
},
{
    'task': 'Go for walk', 'id': 1
}
]
var form = document.getElementById('form')

function updateFooter(){
    let footer_data = document.getElementById("footerData")
    
    footer_data.innerHTML = "Total " + total_task + " tasks <span class='completed'>" + completed + " completed</span> <span class='remaining'>" + remaining + " remain</span>"
    footer.appendChild(footer_data)
    
}

function addData(task){

    total_task += 1
    remaining += 1
    var holder = document.getElementById('list')
    let newLi = document.createElement("Li")
    let newP = document.createElement("p")
    let newButton = document.createElement("button")

    newP.innerHTML = task
    newButton.innerHTML = "Delete"
    newP.className = 'task'
    newButton.className = 'delete'
    newLi.className = "item"

    let toggler = document.createElement("button")
    toggler.id = "toggleButton"
    toggler.textContent = "❌"
    toggler.addEventListener("click", () =>{
        isToggled = !isToggled;
    
    if (isToggled) {
        toggler.textContent = '✔️';
        completed += 1;
        remaining -= 1
        
    } else {
        toggler.textContent = '❌';
        completed -= 1
        remaining += 1
    }
    updateFooter()
    })
    
    newLi.appendChild(toggler)
    newLi.appendChild(newP)
    newLi.appendChild(newButton)

    holder.appendChild(newLi)

    newButton.addEventListener('click', () => {
        newLi.remove()
        total_task -= 1
        remaining -= 1
        if (completed > 0){
            completed -= 1
        }
        
        updateFooter()
    })

    updateFooter()

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
callData()
form.addEventListener('submit', submitButton)

