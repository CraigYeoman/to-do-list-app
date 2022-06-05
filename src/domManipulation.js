import { tasks, deleteTask, addTask, projectList } from './logic';


const containerTasks = document.getElementById('content');
const taskTemplate = document.getElementById('tasks-template');
const modal = document.getElementById('modal');
const addTaskButton = document.getElementById('add-task-button')
const addTaskButtonModal = document.getElementById('add-task-button-modal')
const projectslist = document.getElementById('project-list')


function init() {
    addTaskButtonModal.addEventListener('click', openModal)
    addTaskButton.addEventListener('click', () => {
    addTask();
    render();
    })
    render();
};

export function render() {
    clearElement(containerTasks);
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

function clearElement(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

function projectPrint() {
    clearElement(projectslist);
    let projects = projectList();
    projects.forEach((project) => {
        const projectButtons = document.createElement('button');
        const arrow = document.createElement('img');
        arrow.src = "svg/right.svg";
        arrow.classList = 'svg';
        projectButtons.appendChild(arrow);
        projectButtons.src = "./svg/right.svg"
        projectButtons.classList = 'btn project';
        projectButtons.textContent = project;
        projectslist.appendChild(arrow);
        projectslist.appendChild(projectButtons);
    })
}

export default init;

