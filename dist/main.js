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
        deleteButton.addEventListener('click', (e) => {
            console.log(e);
            _logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask.bind(e);
            render();
        }
        , false);
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

function deleteTask() {
    console.log(this.id);
    tasks.splice(this.id, 1);
    console.log(tasks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7OztBQUdyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUM7Ozs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsNERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcywgZGVsZXRlVGFzaywgYWRkVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG5cbmNvbnN0IGNvbnRhaW5lclRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy10ZW1wbGF0ZScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJylcbmNvbnN0IGFkZFRhc2tCdXR0b25Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24tbW9kYWwnKVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZFRhc2tCdXR0b25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2soKTtcbiAgICByZW5kZXIoKTtcbiAgICB9KVxuICAgIHJlbmRlcigpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNsZWFyRWxlbWVudCgpO1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay10aXRsZV0nKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByb2plY3RdJyk7XG4gICAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t0YXNrLXByaW9yaXR5XScpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stZHVlLWRhdGVdJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2NoZWNrLWJveF0nKTtcbiAgICAgICAgY2hlY2tCb3gudmFsdWUgPSB0YXNrLmNvbXBsZXRpb247XG4gICAgICAgIHRhc2suaWQgPSB0YXNrcy5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGVsZXRlLWJ1dHRvbl0nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gdGFzay5pZDtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5iaW5kKGUpO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLCBmYWxzZSk7XG4gICAgICAgIGNvbnRhaW5lclRhc2tzLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KCkge1xuICAgIHdoaWxlIChjb250YWluZXJUYXNrcy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgY29udGFpbmVyVGFza3MucmVtb3ZlQ2hpbGQoY29udGFpbmVyVGFza3MuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cbiIsImxldCB0YXNrcyA9IFt7XG4gICAgdGl0bGU6ICdFeGFtcGxlIDEnLFxuICAgIHByb2plY3Q6ICdQZXJzb25hbCcsXG4gICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgIGR1ZURhdGU6ICcxMC8yMy8yMicsXG4gICAgY29tcGxldGlvbjogZmFsc2UsXG59LCB7XG4gICAgdGl0bGU6ICdFeGFtcGxlIDInLFxuICAgIHByb2plY3Q6ICdXb3JrJyxcbiAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgIGR1ZURhdGU6ICc5LzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn1dO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGNvbnN0IGJhY2tHcm91bmRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW1vZGFsJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgbGV0IHRhc2tDb21wbGV0aW9uID0gJ2luY29tcGxldGUnXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tDb21wbGV0aW9uKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XG4gICAgdGFza3Muc3BsaWNlKHRoaXMuaWQsIDEpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdGFza3Ncbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXQgZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xuXG5pbml0KCk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9