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
const projectsButton = document.getElementById('project-button')


function init() {
    addTaskButtonModal.addEventListener('click', openModal)
    addTaskButton.addEventListener('click', () => {
    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.addTask)();
    render();
    })
    render();
};

function render() {
    clearElement();
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

function clearElement() {
    while (containerTasks.hasChildNodes()) {
        containerTasks.removeChild(containerTasks.firstChild)
    }
}

function projectPrint() {
    let projects = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectList)();
    projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.textContent = project;
        projectsButton.appendChild(projectDiv);
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
    const projects = []
    for (let i = tasks.length-1; i >= 0; i--) {
        if (projects.includes(tasks[i].project)) {
            return
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtFOzs7QUFHbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFPQzs7Ozs7OztVQ25ERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQyw0REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tzLCBkZWxldGVUYXNrLCBhZGRUYXNrLCBwcm9qZWN0TGlzdCB9IGZyb20gJy4vbG9naWMnO1xuXG5cbmNvbnN0IGNvbnRhaW5lclRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy10ZW1wbGF0ZScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJylcbmNvbnN0IGFkZFRhc2tCdXR0b25Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24tbW9kYWwnKVxuY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24nKVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYWRkVGFza0J1dHRvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFzaygpO1xuICAgIHJlbmRlcigpO1xuICAgIH0pXG4gICAgcmVuZGVyKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNsZWFyRWxlbWVudCgpO1xuICAgIHByb2plY3RQcmludCgpO1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay10aXRsZV0nKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByb2plY3RdJyk7XG4gICAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByaW9yaXR5XScpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stZHVlLWRhdGVdJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2NoZWNrLWJveF0nKTtcbiAgICAgICAgY2hlY2tCb3gudmFsdWUgPSB0YXNrLmNvbXBsZXRpb247XG4gICAgICAgIHRhc2suaWQgPSB0YXNrcy5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGVsZXRlLWJ1dHRvbl0nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gdGFzay5pZDtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkltZyA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RlbGV0ZS1pbWddJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbkltZy5pZCA9IHRhc2suaWQ7XG4gICAgICAgIGNvbnRhaW5lclRhc2tzLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KCkge1xuICAgIHdoaWxlIChjb250YWluZXJUYXNrcy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgY29udGFpbmVyVGFza3MucmVtb3ZlQ2hpbGQoY29udGFpbmVyVGFza3MuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RQcmludCgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBwcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdHNCdXR0b24uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuIiwibGV0IHRhc2tzID0gW3tcbiAgICB0aXRsZTogJ0V4YW1wbGUgMScsXG4gICAgcHJvamVjdDogJ1BlcnNvbmFsJyxcbiAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgZHVlRGF0ZTogJzEwLzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn0sIHtcbiAgICB0aXRsZTogJ0V4YW1wbGUgMicsXG4gICAgcHJvamVjdDogJ1dvcmsnLFxuICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgZHVlRGF0ZTogJzkvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufV07XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBjb21wbGV0aW9uLCBpZCkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBjb21wbGV0aW9uLCBpZH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgY29uc3QgYmFja0dyb3VuZE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtbW9kYWwnKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcbiAgICBsZXQgdGFza0NvbXBsZXRpb24gPSAnaW5jb21wbGV0ZSdcbiAgICBsZXQgbmV3VGFzayA9IHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrUHJvamVjdC52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza0NvbXBsZXRpb24pO1xuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhldmVudCkge1xuICAgIHRhc2tzLnNwbGljZShldmVudC50YXJnZXQuaWQsIDEpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRhc2tzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJvamVjdHMuaW5jbHVkZXModGFza3NbaV0ucHJvamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgcHJvamVjdHMucHVzaCh0YXNrc1tpXS5wcm9qZWN0KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICB0YXNrcyxcbiAgICBwcm9qZWN0TGlzdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdCBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5cbmluaXQoKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=