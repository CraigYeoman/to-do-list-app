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
    console.log(projects);
    return projects;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtFOzs7QUFHbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBT0M7Ozs7Ozs7VUNuREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsNERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcywgZGVsZXRlVGFzaywgYWRkVGFzaywgcHJvamVjdExpc3QgfSBmcm9tICcuL2xvZ2ljJztcblxuXG5jb25zdCBjb250YWluZXJUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtdGVtcGxhdGUnKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBhZGRUYXNrQnV0dG9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uLW1vZGFsJylcbmNvbnN0IHByb2plY3RzbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYWRkVGFza0J1dHRvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFzaygpO1xuICAgIHJlbmRlcigpO1xuICAgIH0pXG4gICAgcmVuZGVyKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNsZWFyRWxlbWVudChjb250YWluZXJUYXNrcyk7XG4gICAgcHJvamVjdFByaW50KCk7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXRpdGxlXScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJvamVjdF0nKTtcbiAgICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJpb3JpdHldJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay1kdWUtZGF0ZV0nKTtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbY2hlY2stYm94XScpO1xuICAgICAgICBjaGVja0JveC52YWx1ZSA9IHRhc2suY29tcGxldGlvbjtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tzLmZpbmRJbmRleChpID0+IGkudGl0bGUgPT09IHRhc2sudGl0bGUpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkZWxldGUtYnV0dG9uXScpO1xuICAgICAgICBkZWxldGVCdXR0b24uaWQgPSB0YXNrLmlkO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2soZXZlbnQpO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uSW1nID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGVsZXRlLWltZ10nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uSW1nLmlkID0gdGFzay5pZDtcbiAgICAgICAgY29udGFpbmVyVGFza3MuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZScpO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RQcmludCgpIHtcbiAgICBjbGVhckVsZW1lbnQocHJvamVjdHNsaXN0KTtcbiAgICBsZXQgcHJvamVjdHMgPSBwcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gXCJzdmcvcmlnaHQuc3ZnXCI7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdCA9ICdzdmcnO1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgIHByb2plY3RCdXR0b25zLnNyYyA9IFwiLi9zdmcvcmlnaHQuc3ZnXCJcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2J0biBwcm9qZWN0JztcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cbiIsImxldCB0YXNrcyA9IFt7XG4gICAgdGl0bGU6ICdFeGFtcGxlIDEnLFxuICAgIHByb2plY3Q6ICdQZXJzb25hbCcsXG4gICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgIGR1ZURhdGU6ICcxMC8yMy8yMicsXG4gICAgY29tcGxldGlvbjogZmFsc2UsXG59LCB7XG4gICAgdGl0bGU6ICdFeGFtcGxlIDInLFxuICAgIHByb2plY3Q6ICdXb3JrJyxcbiAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgIGR1ZURhdGU6ICc5LzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn1dO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGNvbnN0IGJhY2tHcm91bmRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW1vZGFsJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgbGV0IHRhc2tDb21wbGV0aW9uID0gJ2luY29tcGxldGUnXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tDb21wbGV0aW9uKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICB0YXNrcy5zcGxpY2UoZXZlbnQudGFyZ2V0LmlkLCAxKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gdGFza3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5pbmNsdWRlcyh0YXNrc1tpXS5wcm9qZWN0KSkge1xuICAgICAgICAgIDsgIFxuICAgICAgICB9IGVsc2UgcHJvamVjdHMucHVzaCh0YXNrc1tpXS5wcm9qZWN0KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICB0YXNrcyxcbiAgICBwcm9qZWN0TGlzdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdCBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5cbmluaXQoKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=