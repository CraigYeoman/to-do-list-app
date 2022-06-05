import { tasks, deleteTask, addTask, projectList } from './logic';


const containerTasks = document.getElementById('content');
const taskTemplate = document.getElementById('tasks-template');
const modal = document.getElementById('modal');
const addTaskButton = document.getElementById('add-task-button')
const addTaskButtonModal = document.getElementById('add-task-button-modal')
const projectsButton = document.getElementById('project-button')


function init() {
    addTaskButtonModal.addEventListener('click', openModal)
    addTaskButton.addEventListener('click', () => {
    addTask();
    render();
    })
    render();
};

export function render() {
    clearElement();
    projectPrint();
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
        task.id = tasks.findIndex(i => i.title === task.title);
        const deleteButton = taskContainer.querySelector('[delete-button]');
        deleteButton.id = task.id;
        deleteButton.addEventListener('click', (event) => {
            deleteTask(event);
            render();
        }, false);
        const deleteButtonImg = taskContainer.querySelector('[delete-img]');
        deleteButtonImg.id = task.id;
        containerTasks.appendChild(taskContainer);
    });
}

function openModal() {
    modal.classList.add('activate');
}

function clearElement() {
    while (containerTasks.hasChildNodes()) {
        containerTasks.removeChild(containerTasks.firstChild)
    }
}

function projectPrint() {
    let projects = projectList();
    projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.textContent = project;
        projectsButton.appendChild(projectDiv);
    })
}

export default init;

