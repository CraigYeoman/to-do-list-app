let tasks = [{
    title: 'Example 1',
    project: 'Personal',
    priority: 'Low',
    dueDate: '10/23/22',
    completion: false,
}, {
    title: 'Example 2',
    project: 'Work',
    priority: 'High',
    dueDate: '9/23/22',
    completion: false,
}];

const task = (title, project, priority, dueDate, completion, id) => {
    return {title, project, priority, dueDate, completion, id};
}

function addTask() {
    const addTaskModal = document.getElementById('modal');
    const backGroundModal = document.getElementById('background-modal');
    const taskTitle = document.querySelector('#title');
    const taskProject = document.querySelector('#project');
    const taskPriority = document.querySelector('#priority');
    const taskDueDate = document.querySelector('#due-date');
    let taskCompletion = 'incomplete'
    let newTask = task(taskTitle.value, taskProject.value, taskPriority.value, taskDueDate.value, taskCompletion);
    tasks.push(newTask);
    modal.classList.remove('activate');
}

function deleteTask(event) {
    tasks.splice(event.target.id, 1);
}

function projectList() {
    let projects = []
    for (let i = tasks.length-1; i >= 0; i--) {
        if (projects.includes(tasks[i].project)) {
          ;  
        } else projects.push(tasks[i].project)
    }
    return projects;
}

function projectSelector(e) {
    let newArray = []
    for (let i = tasks.length-1; i >= 0; i--) {
        let newArray2 = Object.values(tasks[i]);
        if (newArray2.includes(e.target.id)) {
          newArray.push(tasks[i]);  
    }
    console.log(newArray);
    return newArray;
}
}

export {
    addTask,
    deleteTask,
    tasks,
    projectList,
    projectSelector
}
