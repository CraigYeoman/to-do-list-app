/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


const addTaskButton = document.getElementById('add-task-button')
const addTaskButtonModal = document.getElementById('add-task-button-modal')
const containerTasks = document.getElementById('content');
const taskTemplate = document.getElementById('tasks-template');
const modal = document.getElementById('modal');


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
        task.id = tasks.findIndex(i => i.title === task.title);
        const deleteButton = taskContainer.querySelector('[delete-button]');
        deleteButton.id = task.id;
        containerTasks.appendChild(taskContainer);
    });
}

function cache() {
    
}

function openModal() {
    modal.classList.add('activate');
    console.log('meow');
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
    render();
}

function deleteTask(e) {
    if(e.target.tagName.toLowerCase() === 'img') {
    console.log(e.target.id);
    tasks.splice(e.target.id, 1);
    render();
    }
}

console.log('hellod');
console.log(tasks);

render();

const deleteButton = document.querySelectorAll('[delete-button]');

addTaskButtonModal.addEventListener('click', openModal)
addTaskButton.addEventListener('click', addTask);
containerTasks.addEventListener('click', deleteTask);




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFza3MgPSBbe1xuICAgIHRpdGxlOiAnRXhhbXBsZSAxJyxcbiAgICBwcm9qZWN0OiAnUGVyc29uYWwnLFxuICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICBkdWVEYXRlOiAnMTAvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufSwge1xuICAgIHRpdGxlOiAnRXhhbXBsZSAyJyxcbiAgICBwcm9qZWN0OiAnV29yaycsXG4gICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICBkdWVEYXRlOiAnOS8yMy8yMicsXG4gICAgY29tcGxldGlvbjogZmFsc2UsXG59XTtcblxuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBhZGRUYXNrQnV0dG9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uLW1vZGFsJylcbmNvbnN0IGNvbnRhaW5lclRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy10ZW1wbGF0ZScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcblxuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRhaW5lclRhc2tzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBjb250YWluZXJUYXNrcy5yZW1vdmVDaGlsZChjb250YWluZXJUYXNrcy5maXJzdENoaWxkKVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY2xlYXJFbGVtZW50KCk7XG4gICAgXG4gICAgXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXRpdGxlXScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJvamVjdF0nKTtcbiAgICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJpb3JpdHldJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay1kdWUtZGF0ZV0nKTtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbY2hlY2stYm94XScpO1xuICAgICAgICBjaGVja0JveC52YWx1ZSA9IHRhc2suY29tcGxldGlvbjtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tzLmZpbmRJbmRleChpID0+IGkudGl0bGUgPT09IHRhc2sudGl0bGUpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkZWxldGUtYnV0dG9uXScpO1xuICAgICAgICBkZWxldGVCdXR0b24uaWQgPSB0YXNrLmlkO1xuICAgICAgICBjb250YWluZXJUYXNrcy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2FjaGUoKSB7XG4gICAgXG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZScpO1xuICAgIGNvbnNvbGUubG9nKCdtZW93Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgY29uc3QgYmFja0dyb3VuZE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtbW9kYWwnKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcbiAgICBsZXQgdGFza0NvbXBsZXRpb24gPSAnaW5jb21wbGV0ZSdcbiAgICBsZXQgbmV3VGFzayA9IHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrUHJvamVjdC52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza0NvbXBsZXRpb24pO1xuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGUnKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgaWYoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJykge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcbiAgICB0YXNrcy5zcGxpY2UoZS50YXJnZXQuaWQsIDEpO1xuICAgIHJlbmRlcigpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coJ2hlbGxvZCcpO1xuY29uc29sZS5sb2codGFza3MpO1xuXG5yZW5kZXIoKTtcblxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RlbGV0ZS1idXR0b25dJyk7XG5cbmFkZFRhc2tCdXR0b25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcbmNvbnRhaW5lclRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=