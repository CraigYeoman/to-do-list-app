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

const containerTasks = document.getElementById('content');
const taskTemplate = document.getElementById('tasks-template');

const task = (title, project, priority, dueDate, completion, id) => {
    return {title, project, priority, dueDate, completion, id};
}

function clearElement() {
    while (containerTasks.hasChildNodes()) {
        containerTasks.removeChild(containerTasks.firstChild)
    }

}

function render() {
    clearElement();
    
    
    tasks.forEach(task => {
        const taskContainer = document.importNode(taskTemplate.content, true);
        const taskTitle = taskContainer.querySelector('[task-title]');
        taskTitle.textContent = task.title;
        const taskProject = taskContainer.querySelector('[task-project]');
        taskProject.textContent = task.project;
        const taskPriority = taskContainer.querySelector('[task-priority]');
        taskPriority.textContent = task.priority;
        const taskDueDate = taskContainer.querySelector('[task-due-date]');
        taskDueDate.textContent = task.dueDate;
        const checkBox = taskContainer.querySelector('[check-box]');
        checkBox.value = task.completion;
        containerTasks.appendChild(taskContainer);
        task.id = tasks.findIndex(i => i.title === task.title);
        //deleteButton.id = task.id
    });
}

function addTask() {
    let newTask = new task(taskTitle, taskProject, taskPriority, taskDueDate, taskCompletion);
    tasks.push(newTask);
    // Remove modal
    render();
}

const example = task('Example', 'Personal', 'High', '10/23/22', 'incomplete', 'This is the example', 'Make sure is is an example');

console.log('hellod');
console.log(example.title);
console.log(tasks);


render();
