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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    render(_logic__WEBPACK_IMPORTED_MODULE_0__.currentTaskSelection);
    })
    render(_logic__WEBPACK_IMPORTED_MODULE_0__.tasks);
};




function render(selection) {
    clearElement(containerTasks);
    projectPrint();
    selection.forEach(task => {
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
        task.id = selection.findIndex(i => i.title === task.title);
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
        projectButtons.addEventListener('click', function (e) {
            let currentTaskSelection = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectSelector)(e);
            render(currentTaskSelection);
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
/* harmony export */   "currentTaskSelection": () => (/* binding */ currentTaskSelection),
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
    let currentTaskSelection = []
    for (let i = 0; i <= tasks.length-1; i++) {
        let current = tasks[i];
        let currentA = Object.values(current)
        if (currentA.includes(e.target.id)) {
            currentTaskSelection.push(tasks[i]);  
    }
    console.log(currentTaskSelection);
    }
    return currentTaskSelection;
}

let currentTaskSelection = tasks;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUc7OztBQUd6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1gsV0FBVyx3REFBb0I7QUFDL0IsS0FBSztBQUNMLFdBQVcseUNBQUs7QUFDaEI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQWU7QUFDdEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQVNDOzs7Ozs7O1VDckVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDLDREQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcywgZGVsZXRlVGFzaywgYWRkVGFzaywgcHJvamVjdExpc3QsIHByb2plY3RTZWxlY3RvciwgY3VycmVudFRhc2tTZWxlY3Rpb24gfSBmcm9tICcuL2xvZ2ljJztcblxuXG5jb25zdCBjb250YWluZXJUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtdGVtcGxhdGUnKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBhZGRUYXNrQnV0dG9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uLW1vZGFsJylcbmNvbnN0IHByb2plY3RzbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKVxuXG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRUYXNrQnV0dG9uTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrKCk7XG4gICAgcmVuZGVyKGN1cnJlbnRUYXNrU2VsZWN0aW9uKTtcbiAgICB9KVxuICAgIHJlbmRlcih0YXNrcyk7XG59O1xuXG5cblxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0aW9uKSB7XG4gICAgY2xlYXJFbGVtZW50KGNvbnRhaW5lclRhc2tzKTtcbiAgICBwcm9qZWN0UHJpbnQoKTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXRpdGxlXScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJvamVjdF0nKTtcbiAgICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJpb3JpdHldJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay1kdWUtZGF0ZV0nKTtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbY2hlY2stYm94XScpO1xuICAgICAgICBjaGVja0JveC52YWx1ZSA9IHRhc2suY29tcGxldGlvbjtcbiAgICAgICAgdGFzay5pZCA9IHNlbGVjdGlvbi5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGVsZXRlLWJ1dHRvbl0nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gdGFzay5pZDtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkltZyA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RlbGV0ZS1pbWddJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbkltZy5pZCA9IHRhc2suaWQ7XG4gICAgICAgIGNvbnRhaW5lclRhc2tzLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0UHJpbnQoKSB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzbGlzdCk7XG4gICAgbGV0IHByb2plY3RzID0gcHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNyYyA9IFwic3ZnL3JpZ2h0LnN2Z1wiO1xuICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSAnc3ZnJztcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5zcmMgPSBcIi4vc3ZnL3JpZ2h0LnN2Z1wiXG4gICAgICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdCA9ICdidG4gcHJvamVjdCc7XG4gICAgICAgIHByb2plY3RCdXR0b25zLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuaWQgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2tTZWxlY3Rpb24gPSBwcm9qZWN0U2VsZWN0b3IoZSk7XG4gICAgICAgICAgICByZW5kZXIoY3VycmVudFRhc2tTZWxlY3Rpb24pO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuICAgIH0pICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuIiwibGV0IHRhc2tzID0gW3tcbiAgICB0aXRsZTogJ0V4YW1wbGUgMScsXG4gICAgcHJvamVjdDogJ1BlcnNvbmFsJyxcbiAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgZHVlRGF0ZTogJzEwLzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn0sIHtcbiAgICB0aXRsZTogJ0V4YW1wbGUgMicsXG4gICAgcHJvamVjdDogJ1dvcmsnLFxuICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgZHVlRGF0ZTogJzkvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufV07XG5cblxuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGNvbnN0IGJhY2tHcm91bmRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW1vZGFsJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgbGV0IHRhc2tDb21wbGV0aW9uID0gJ2luY29tcGxldGUnXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tDb21wbGV0aW9uKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICB0YXNrcy5zcGxpY2UoZXZlbnQudGFyZ2V0LmlkLCAxKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gdGFza3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5pbmNsdWRlcyh0YXNrc1tpXS5wcm9qZWN0KSkge1xuICAgICAgICAgIDsgIFxuICAgICAgICB9IGVsc2UgcHJvamVjdHMucHVzaCh0YXNrc1tpXS5wcm9qZWN0KVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RTZWxlY3RvcihlKSB7XG4gICAgbGV0IGN1cnJlbnRUYXNrU2VsZWN0aW9uID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0YXNrcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGFza3NbaV07XG4gICAgICAgIGxldCBjdXJyZW50QSA9IE9iamVjdC52YWx1ZXMoY3VycmVudClcbiAgICAgICAgaWYgKGN1cnJlbnRBLmluY2x1ZGVzKGUudGFyZ2V0LmlkKSkge1xuICAgICAgICAgICAgY3VycmVudFRhc2tTZWxlY3Rpb24ucHVzaCh0YXNrc1tpXSk7ICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coY3VycmVudFRhc2tTZWxlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFRhc2tTZWxlY3Rpb247XG59XG5cbmxldCBjdXJyZW50VGFza1NlbGVjdGlvbiA9IHRhc2tzO1xuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICB0YXNrcyxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICBwcm9qZWN0U2VsZWN0b3IsXG4gICAgY3VycmVudFRhc2tTZWxlY3Rpb25cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXQgZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xuXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9