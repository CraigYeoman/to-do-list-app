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
    for (let i = tasks.length-1; i >= 0; i--) {
        let currentObject = Object.values(tasks[i]);
        if (currentObject.includes(e.target.id)) {
            currentTaskSelection.push(tasks[i]);  
    }
    console.log(currentTaskSelection);
    return currentTaskSelection;
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUc7OztBQUd6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1gsV0FBVyx3REFBb0I7QUFDL0IsS0FBSztBQUNMLFdBQVcseUNBQUs7QUFDaEI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFlO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFTQzs7Ozs7OztVQ3BFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQyw0REFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza3MsIGRlbGV0ZVRhc2ssIGFkZFRhc2ssIHByb2plY3RMaXN0LCBwcm9qZWN0U2VsZWN0b3IsIGN1cnJlbnRUYXNrU2VsZWN0aW9uIH0gZnJvbSAnLi9sb2dpYyc7XG5cblxuY29uc3QgY29udGFpbmVyVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgdGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLXRlbXBsYXRlJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKVxuY29uc3QgYWRkVGFza0J1dHRvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbi1tb2RhbCcpXG5jb25zdCBwcm9qZWN0c2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0JylcblxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYWRkVGFza0J1dHRvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFzaygpO1xuICAgIHJlbmRlcihjdXJyZW50VGFza1NlbGVjdGlvbik7XG4gICAgfSlcbiAgICByZW5kZXIodGFza3MpO1xufTtcblxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKHNlbGVjdGlvbikge1xuICAgIGNsZWFyRWxlbWVudChjb250YWluZXJUYXNrcyk7XG4gICAgcHJvamVjdFByaW50KCk7XG4gICAgc2VsZWN0aW9uLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay10aXRsZV0nKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByb2plY3RdJyk7XG4gICAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByaW9yaXR5XScpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stZHVlLWRhdGVdJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2NoZWNrLWJveF0nKTtcbiAgICAgICAgY2hlY2tCb3gudmFsdWUgPSB0YXNrLmNvbXBsZXRpb247XG4gICAgICAgIHRhc2suaWQgPSBzZWxlY3Rpb24uZmluZEluZGV4KGkgPT4gaS50aXRsZSA9PT0gdGFzay50aXRsZSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RlbGV0ZS1idXR0b25dJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IHRhc2suaWQ7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVGFzayhldmVudCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25JbWcgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkZWxldGUtaW1nXScpO1xuICAgICAgICBkZWxldGVCdXR0b25JbWcuaWQgPSB0YXNrLmlkO1xuICAgICAgICBjb250YWluZXJUYXNrcy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdFByaW50KCkge1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0c2xpc3QpO1xuICAgIGxldCBwcm9qZWN0cyA9IHByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhcnJvdy5zcmMgPSBcInN2Zy9yaWdodC5zdmdcIjtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gJ3N2Zyc7XG4gICAgICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuc3JjID0gXCIuL3N2Zy9yaWdodC5zdmdcIlxuICAgICAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QgPSAnYnRuIHByb2plY3QnO1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RCdXR0b25zLmlkID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdG9yKGUpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuICAgIH0pICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuIiwibGV0IHRhc2tzID0gW3tcbiAgICB0aXRsZTogJ0V4YW1wbGUgMScsXG4gICAgcHJvamVjdDogJ1BlcnNvbmFsJyxcbiAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgZHVlRGF0ZTogJzEwLzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn0sIHtcbiAgICB0aXRsZTogJ0V4YW1wbGUgMicsXG4gICAgcHJvamVjdDogJ1dvcmsnLFxuICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgZHVlRGF0ZTogJzkvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufV07XG5cblxuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGNvbnN0IGJhY2tHcm91bmRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW1vZGFsJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgbGV0IHRhc2tDb21wbGV0aW9uID0gJ2luY29tcGxldGUnXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tDb21wbGV0aW9uKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICB0YXNrcy5zcGxpY2UoZXZlbnQudGFyZ2V0LmlkLCAxKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gdGFza3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5pbmNsdWRlcyh0YXNrc1tpXS5wcm9qZWN0KSkge1xuICAgICAgICAgIDsgIFxuICAgICAgICB9IGVsc2UgcHJvamVjdHMucHVzaCh0YXNrc1tpXS5wcm9qZWN0KVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RTZWxlY3RvcihlKSB7XG4gICAgbGV0IGN1cnJlbnRUYXNrU2VsZWN0aW9uID0gW11cbiAgICBmb3IgKGxldCBpID0gdGFza3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBjdXJyZW50T2JqZWN0ID0gT2JqZWN0LnZhbHVlcyh0YXNrc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50T2JqZWN0LmluY2x1ZGVzKGUudGFyZ2V0LmlkKSkge1xuICAgICAgICAgICAgY3VycmVudFRhc2tTZWxlY3Rpb24ucHVzaCh0YXNrc1tpXSk7ICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coY3VycmVudFRhc2tTZWxlY3Rpb24pO1xuICAgIHJldHVybiBjdXJyZW50VGFza1NlbGVjdGlvbjtcbn1cbn1cblxubGV0IGN1cnJlbnRUYXNrU2VsZWN0aW9uID0gdGFza3M7XG5cbmV4cG9ydCB7XG4gICAgYWRkVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIHRhc2tzLFxuICAgIHByb2plY3RMaXN0LFxuICAgIHByb2plY3RTZWxlY3RvcixcbiAgICBjdXJyZW50VGFza1NlbGVjdGlvblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdCBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5cbmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=