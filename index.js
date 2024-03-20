

var total_task = 0 // Keep track of total tasks in the list
var completed = 0 // Keep track of total completed tasks in the list
var remaining = 0 // Keep track of total remaining tasks in the list
var isToggled = false // We will use this variable to toggle between completed and incomplete tasks

// Dummy data to add so that we do not have empty page upon opening in the tasks section
var data = [{
    'task':"I want to complete my project", 'id':0
},
{
    'task': 'Go for walk', 'id': 1
}
]

// to access the form data entered
var form = document.getElementById('form')


// to update values for no. of tasks total, completed and remaining
function updateFooter(){
    let footer_data = document.getElementById("footerData")
    
    footer_data.innerHTML = "Total " + total_task + " tasks <span class='completed'>" + completed + " completed</span> <span class='remaining'>" + remaining + " remain</span>"
    footer.appendChild(footer_data)
    
}

// This function takes task as the inpout and adds the task in the page
function addData(task){

    total_task += 1 //increasing total tasks
    remaining += 1 // since we are adding new task it would be incomplete by default
    var holder = document.getElementById('list') // Access the unordered list in which we will add data
    let toggler = document.createElement("button") // Toggle button that marks complete or incomplete task
    let newLi = document.createElement("Li") // creating new <li> so we can add data in list
    let newP = document.createElement("p") // where we will value of our task
    let newButton = document.createElement("button") // Delete button

    // Adding class name where required for newly created element
    newP.className = 'task'
    newButton.className = 'delete'
    newLi.className = "item"
    toggler.className = "toggleButton"

    //Adding  text inside the new elements
    newButton.innerHTML = "Delete"
    newP.innerHTML = task 
    toggler.textContent = "❌"

    // Adding functionality to the toggle button
    toggler.addEventListener("click", () =>{
        
    
        if (toggler.textContent == '❌') {
            toggler.textContent = '✔️';
            completed += 1;
            if (remaining > 0){
                remaining -= 1;
            }
            
        } else {
            toggler.textContent = '❌';
            if (completed > 0){
                completed -= 1
            }
            remaining += 1
        }
        updateFooter()
    })


    // Addig funtionality tot he delete button
    newButton.addEventListener('click', () => {
        newLi.remove()
        total_task -= 1 // total task will reduce at any cost
        
        // we need to check whether we are deleting complete or incomplete task
        if (toggler.textContent == '❌'){
            remaining -= 1
        }
        else{
            completed -= 1
        }
        
        updateFooter()
    })

    // Adding new eleements in the list 
    newLi.appendChild(toggler)
    newLi.appendChild(newP)
    newLi.appendChild(newButton)
    holder.appendChild(newLi)

    // To update values of no. of task remaining
    updateFooter()

}

// this function extracts data entered in the form and passes to above function to add to the page
function submitButton(event){
    var task = document.getElementById('task')
    if (task.value != ""){
        addData(task.value)
    }
    task.value = "";
    event.preventDefault();
}

// this function task is to extract dummy data tasks and pass values to the addData()
function callData(){
    for (let i in data){
        data[i].id = i
        addData(data[i].task)
    }
}
callData()
form.addEventListener('submit', submitButton) // adding functionality to the sumbit button in the form


