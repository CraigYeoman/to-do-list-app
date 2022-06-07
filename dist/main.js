/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



const containerTasks = document.getElementById('content');
const taskTemplate = document.getElementById('tasks-template');
const modal = document.getElementById('modal');
const addTaskButton = document.getElementById('add-task-button')
const addTaskButtonModal = document.getElementById('add-task-button-modal')
const projectslist = document.getElementById('project-list')


function init() {
    addTaskButtonModal.addEventListener('click', openModal)
    addTaskButton.addEventListener('click', () => {
    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.addTask)();
    render();
    })
    render();
};




function render() {
    clearElement(containerTasks);
    projectPrint();
    _logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(task => {
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
        task.id = _logic__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex(i => i.title === task.title);
        const deleteButton = taskContainer.querySelector('[delete-button]');
        deleteButton.id = task.id;
        deleteButton.addEventListener('click', (event) => {
            (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(event);
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
    let projects = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectList)();
    projects.forEach((project) => {
        const projectButtons = document.createElement('button');
        const arrow = document.createElement('img');
        arrow.src = "svg/right.svg";
        arrow.classList = 'svg';
        projectButtons.appendChild(arrow);
        projectButtons.src = "./svg/right.svg"
        projectButtons.classList = 'btn project';
        projectButtons.textContent = project;
        projectButtons.id = project;
        projectButtons.addEventListener('click', function () {
            (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectSelector)(e);
            }, false);
        projectslist.appendChild(arrow);
        projectslist.appendChild(projectButtons);
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "projectSelector": () => (/* binding */ projectSelector),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");


(0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1GOzs7QUFHbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7QUFLTztBQUNQO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUM7Ozs7Ozs7VUMvREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsNERBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tzLCBkZWxldGVUYXNrLCBhZGRUYXNrLCBwcm9qZWN0TGlzdCwgcHJvamVjdFNlbGVjdG9yIH0gZnJvbSAnLi9sb2dpYyc7XG5cblxuY29uc3QgY29udGFpbmVyVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgdGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLXRlbXBsYXRlJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKVxuY29uc3QgYWRkVGFza0J1dHRvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbi1tb2RhbCcpXG5jb25zdCBwcm9qZWN0c2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0JylcblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZFRhc2tCdXR0b25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2soKTtcbiAgICByZW5kZXIoKTtcbiAgICB9KVxuICAgIHJlbmRlcigpO1xufTtcblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjbGVhckVsZW1lbnQoY29udGFpbmVyVGFza3MpO1xuICAgIHByb2plY3RQcmludCgpO1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay10aXRsZV0nKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByb2plY3RdJyk7XG4gICAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByaW9yaXR5XScpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stZHVlLWRhdGVdJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2NoZWNrLWJveF0nKTtcbiAgICAgICAgY2hlY2tCb3gudmFsdWUgPSB0YXNrLmNvbXBsZXRpb247XG4gICAgICAgIHRhc2suaWQgPSB0YXNrcy5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGVsZXRlLWJ1dHRvbl0nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gdGFzay5pZDtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkltZyA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RlbGV0ZS1pbWddJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbkltZy5pZCA9IHRhc2suaWQ7XG4gICAgICAgIGNvbnRhaW5lclRhc2tzLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0UHJpbnQoKSB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzbGlzdCk7XG4gICAgbGV0IHByb2plY3RzID0gcHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNyYyA9IFwic3ZnL3JpZ2h0LnN2Z1wiO1xuICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSAnc3ZnJztcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5zcmMgPSBcIi4vc3ZnL3JpZ2h0LnN2Z1wiXG4gICAgICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdCA9ICdidG4gcHJvamVjdCc7XG4gICAgICAgIHByb2plY3RCdXR0b25zLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuaWQgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3RvcihlKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgcHJvamVjdHNsaXN0LmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgcHJvamVjdHNsaXN0LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG4iLCJsZXQgdGFza3MgPSBbe1xuICAgIHRpdGxlOiAnRXhhbXBsZSAxJyxcbiAgICBwcm9qZWN0OiAnUGVyc29uYWwnLFxuICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICBkdWVEYXRlOiAnMTAvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufSwge1xuICAgIHRpdGxlOiAnRXhhbXBsZSAyJyxcbiAgICBwcm9qZWN0OiAnV29yaycsXG4gICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICBkdWVEYXRlOiAnOS8yMy8yMicsXG4gICAgY29tcGxldGlvbjogZmFsc2UsXG59XTtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUsIGNvbXBsZXRpb24sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUsIGNvbXBsZXRpb24sIGlkfTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBjb25zdCBiYWNrR3JvdW5kTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1tb2RhbCcpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICAgIGxldCB0YXNrQ29tcGxldGlvbiA9ICdpbmNvbXBsZXRlJ1xuICAgIGxldCBuZXdUYXNrID0gdGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tQcm9qZWN0LnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tEdWVEYXRlLnZhbHVlLCB0YXNrQ29tcGxldGlvbik7XG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZScpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgdGFza3Muc3BsaWNlKGV2ZW50LnRhcmdldC5pZCwgMSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0KCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRhc2tzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJvamVjdHMuaW5jbHVkZXModGFza3NbaV0ucHJvamVjdCkpIHtcbiAgICAgICAgICA7ICBcbiAgICAgICAgfSBlbHNlIHByb2plY3RzLnB1c2godGFza3NbaV0ucHJvamVjdClcbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0U2VsZWN0b3IoZSkge1xuICAgIGxldCBuZXdBcnJheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRhc2tzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgbmV3QXJyYXkyID0gT2JqZWN0LnZhbHVlcyh0YXNrc1tpXSk7XG4gICAgICAgIGlmIChuZXdBcnJheTIuaW5jbHVkZXMoZS50YXJnZXQuaWQpKSB7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaCh0YXNrc1tpXSk7ICBcbiAgICB9XG4gICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuICAgIHJldHVybiBuZXdBcnJheTtcbn1cbn1cblxuZXhwb3J0IHtcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdGFza3MsXG4gICAgcHJvamVjdExpc3QsXG4gICAgcHJvamVjdFNlbGVjdG9yXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0IGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==