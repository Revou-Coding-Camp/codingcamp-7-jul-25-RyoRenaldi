console.log('JavaScript is running!');
// Entire List
let taskList = [];

// To add a task
function addTask(){
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

    // To validate inputs
    if (taskInput.value === '' || dueDateInput.value ===''){
        alert('Blank inputs detected. Please fill in both inputs');
    } else {
        // To create a new task object
        const newTask = {
            id: Date.now(), // ID based on the time when the new task is created
            task: taskInput.value,
            dueDate: dueDateInput.value,
            completed: false
        };
        // To insert the new task to entire list
        taskList.push(newTask);
        // To clear the input forms
        taskInput.value = '';
        dueDateInput.value = '';
        // To display task
        displayTask();
        console.log('New task added:', newTask);
    }
}

// To display task
function displayTask(){
    // To create task list display object
    const displayList = document.getElementById('task-list');
    // To clear the current display list
    displayList.innerHTML = '';
    taskList.forEach(element =>{
        const taskItem = `
        <div>
            <span>${element.task}</span>
            <span>${element.dueDate}</span>
            <button onclick = "toggleTaskCompletion(${element.id})">
                ${element.completed ? 'Completed' : "Not Completed"}
            </button>
            <button onclick = "deleteTask(${element.id})">
                Delete
            </button>
        </div>
        `;
        displayList.innerHTML += taskItem;
    });
}

// To delete one task
function deleteTask(id){
    // To find index matching the task to be deleted
    const taskIndex = taskList.findIndex(task => task.id === id);
    console.log('Delete task with ID:', id);
    console.log('Index found:', taskIndex);
    if (taskIndex !== -1){
        // To remove the task from the task list
        taskList.splice(taskIndex, 1);
        // To refresh the display list
        displayTask();
    }
}

// To delete all tasks
function deleteAllTasks(){
    // To rest taskList to blank
    taskList = [];
    // To refresh the display list
    displayTask();
    console.log('All tasks deleted');
}

// To toggle task completion
function toggleTaskCompletion(id){
    // To find index matching the task to toggle
    const toggleIndex = taskList.find(task => task.id === id);
    console.log('Toggle task with ID:', id);
    console.log('Index found:', toggleIndex);
    if (toggleIndex){
        // To toggle the completion status
        toggleIndex.completed = !toggleIndex.completed;
        console.log('New status:',taskList.completed)
    }
    displayTask();
}

// To filter for completed
function filterCompleted(){
    // To create completed task list object
    const completedTaskList = [];
    for (let i = 0 ; i < taskList.length ; i++){
        if (taskList[i].completed == true){
            completedTaskList.push(taskList[i]);
        }
    }
    // To create task list display object
    const completedTaskDisplayList = document.getElementById('task-list');
    // To clear the current display list
    completedTaskDisplayList.innerHTML = '';
    completedTaskList.forEach(element =>{
        const completedTaskItem = `
        <div>
            <span>${element.task}</span>
            <span>${element.dueDate}</span>
            <button onclick = "toggleTaskCompletion(${element.id})">
                ${element.completed ? 'Completed' : "Not Completed"}
            </button>
            <button onclick = "deleteTask(${element.id})">
                Delete
            </button>
        </div>
        `;
        completedTaskDisplayList.innerHTML += completedTaskItem;
    });
}

// To filter for not completed
function filterNotCompleted(){
    // To create not completed task list object
    const notCompletedTaskList = [];
    for (let i = 0 ; i < taskList.length ; i++){
        if (taskList[i].completed == false){
            notCompletedTaskList.push(taskList[i]);
        }
    }
    // To create task list display object
    const notCompletedTaskDisplayList = document.getElementById('task-list');
    // To clear the current display list
    notCompletedTaskDisplayList.innerHTML = '';
    notCompletedTaskList.forEach(element =>{
        const notCompletedTaskItem = `
        <div>
            <span>${element.task}</span>
            <span>${element.dueDate}</span>
            <button onclick = "toggleTaskCompletion(${element.id})">
                ${element.completed ? 'Completed' : "Not Completed"}
            </button>
            <button onclick = "deleteTask(${element.id})">
                Delete
            </button>
        </div>
        `;
        notCompletedTaskDisplayList.innerHTML += notCompletedTaskItem;
    });
}