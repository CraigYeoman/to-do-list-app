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
const addTaskButton = document.getElementById('add-task-button');
const addTaskButtonModal = document.getElementById('add-task-button-modal');
const projectslist = document.getElementById('project-list');
const homeButton = document.getElementById('home-button');

function clearElement(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}

function projectPrint() {
  clearElement(projectslist);
  const projects = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectList)();
  projects.forEach((project) => {
    const projectButtons = document.createElement('button');
    const arrow = document.createElement('img');
    arrow.src = 'svg/right.svg';
    arrow.classList = 'svg';
    projectButtons.appendChild(arrow);
    projectButtons.src = './svg/right.svg'
    projectButtons.classList = 'btn project';
    projectButtons.textContent = project;
    projectButtons.id = project;
    projectButtons.addEventListener('click', (e) => {
      let currentTaskSelection = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectSelector)(e);
      render(currentTaskSelection);
    }, false);
    projectslist.appendChild(arrow);
    projectslist.appendChild(projectButtons);
  });
}

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
      render(_logic__WEBPACK_IMPORTED_MODULE_0__.currentTaskSelection);
    }, false);
    const deleteButtonImg = taskContainer.querySelector('[delete-img]');
    deleteButtonImg.id = task.id;
    containerTasks.appendChild(taskContainer);
  });
}

function openModal() {
  modal.classList.add('activate');
}

function init() {
  addTaskButtonModal.addEventListener('click', openModal);
  addTaskButton.addEventListener('click', () => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addTask)();
    render(_logic__WEBPACK_IMPORTED_MODULE_0__.currentTaskSelection);
  });
  homeButton.addEventListener('click', () => {
    render(_logic__WEBPACK_IMPORTED_MODULE_0__.tasks);
  });
  render(_logic__WEBPACK_IMPORTED_MODULE_0__.tasks);
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
}, {
    title: 'Example 3',
    project: 'Personal',
    priority: 'Low',
    dueDate: '5/23/22',
    completion: false,
}, {
    title: 'Example 4',
    project: 'Work',
    priority: 'High',
    dueDate: '7/23/22',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFlO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFVO0FBQ2hCLGFBQWEsd0RBQW9CO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQU87QUFDWCxXQUFXLHdEQUFvQjtBQUMvQixHQUFHO0FBQ0g7QUFDQSxXQUFXLHlDQUFLO0FBQ2hCLEdBQUc7QUFDSCxTQUFTLHlDQUFLO0FBQ2Q7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBU0U7Ozs7Ozs7VUNoRkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsNERBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHRhc2tzLCBkZWxldGVUYXNrLCBhZGRUYXNrLCBwcm9qZWN0TGlzdCwgcHJvamVjdFNlbGVjdG9yLCBjdXJyZW50VGFza1NlbGVjdGlvbixcbn0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IGNvbnRhaW5lclRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy10ZW1wbGF0ZScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uLW1vZGFsJyk7XG5jb25zdCBwcm9qZWN0c2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0UHJpbnQoKSB7XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c2xpc3QpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0KCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYXJyb3cuc3JjID0gJ3N2Zy9yaWdodC5zdmcnO1xuICAgIGFycm93LmNsYXNzTGlzdCA9ICdzdmcnO1xuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICBwcm9qZWN0QnV0dG9ucy5zcmMgPSAnLi9zdmcvcmlnaHQuc3ZnJ1xuICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdCA9ICdidG4gcHJvamVjdCc7XG4gICAgcHJvamVjdEJ1dHRvbnMudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIHByb2plY3RCdXR0b25zLmlkID0gcHJvamVjdDtcbiAgICBwcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFRhc2tTZWxlY3Rpb24gPSBwcm9qZWN0U2VsZWN0b3IoZSk7XG4gICAgICByZW5kZXIoY3VycmVudFRhc2tTZWxlY3Rpb24pO1xuICAgIH0sIGZhbHNlKTtcbiAgICBwcm9qZWN0c2xpc3QuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgIHByb2plY3RzbGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0aW9uKSB7XG4gIGNsZWFyRWxlbWVudChjb250YWluZXJUYXNrcyk7XG4gIHByb2plY3RQcmludCgpO1xuICBzZWxlY3Rpb24uZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay10aXRsZV0nKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFzay1wcm9qZWN0XScpO1xuICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stcHJpb3JpdHldJyk7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW3Rhc2stZHVlLWRhdGVdJyk7XG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tjaGVjay1ib3hdJyk7XG4gICAgY2hlY2tCb3gudmFsdWUgPSB0YXNrLmNvbXBsZXRpb247XG4gICAgdGFzay5pZCA9IHNlbGVjdGlvbi5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkZWxldGUtYnV0dG9uXScpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IHRhc2suaWQ7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICAgIHJlbmRlcihjdXJyZW50VGFza1NlbGVjdGlvbik7XG4gICAgfSwgZmFsc2UpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkltZyA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RlbGV0ZS1pbWddJyk7XG4gICAgZGVsZXRlQnV0dG9uSW1nLmlkID0gdGFzay5pZDtcbiAgICBjb250YWluZXJUYXNrcy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUnKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgYWRkVGFza0J1dHRvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrKCk7XG4gICAgcmVuZGVyKGN1cnJlbnRUYXNrU2VsZWN0aW9uKTtcbiAgfSk7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVyKHRhc2tzKTtcbiAgfSk7XG4gIHJlbmRlcih0YXNrcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJsZXQgdGFza3MgPSBbe1xuICAgIHRpdGxlOiAnRXhhbXBsZSAxJyxcbiAgICBwcm9qZWN0OiAnUGVyc29uYWwnLFxuICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICBkdWVEYXRlOiAnMTAvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufSwge1xuICAgIHRpdGxlOiAnRXhhbXBsZSAyJyxcbiAgICBwcm9qZWN0OiAnV29yaycsXG4gICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICBkdWVEYXRlOiAnOS8yMy8yMicsXG4gICAgY29tcGxldGlvbjogZmFsc2UsXG59LCB7XG4gICAgdGl0bGU6ICdFeGFtcGxlIDMnLFxuICAgIHByb2plY3Q6ICdQZXJzb25hbCcsXG4gICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgIGR1ZURhdGU6ICc1LzIzLzIyJyxcbiAgICBjb21wbGV0aW9uOiBmYWxzZSxcbn0sIHtcbiAgICB0aXRsZTogJ0V4YW1wbGUgNCcsXG4gICAgcHJvamVjdDogJ1dvcmsnLFxuICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgZHVlRGF0ZTogJzcvMjMvMjInLFxuICAgIGNvbXBsZXRpb246IGZhbHNlLFxufV07XG5cblxuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGlvbiwgaWR9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGNvbnN0IGJhY2tHcm91bmRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW1vZGFsJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgbGV0IHRhc2tDb21wbGV0aW9uID0gJ2luY29tcGxldGUnXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tDb21wbGV0aW9uKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICB0YXNrcy5zcGxpY2UoZXZlbnQudGFyZ2V0LmlkLCAxKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gdGFza3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5pbmNsdWRlcyh0YXNrc1tpXS5wcm9qZWN0KSkge1xuICAgICAgICAgIDsgIFxuICAgICAgICB9IGVsc2UgcHJvamVjdHMucHVzaCh0YXNrc1tpXS5wcm9qZWN0KVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RTZWxlY3RvcihlKSB7XG4gICAgbGV0IGN1cnJlbnRUYXNrU2VsZWN0aW9uID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0YXNrcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGFza3NbaV07XG4gICAgICAgIGxldCBjdXJyZW50QSA9IE9iamVjdC52YWx1ZXMoY3VycmVudClcbiAgICAgICAgaWYgKGN1cnJlbnRBLmluY2x1ZGVzKGUudGFyZ2V0LmlkKSkge1xuICAgICAgICAgICAgY3VycmVudFRhc2tTZWxlY3Rpb24ucHVzaCh0YXNrc1tpXSk7ICBcbiAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VGFza1NlbGVjdGlvbjtcbn1cblxubGV0IGN1cnJlbnRUYXNrU2VsZWN0aW9uID0gdGFza3M7XG5cbmV4cG9ydCB7XG4gIGFkZFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIHRhc2tzLFxuICBwcm9qZWN0TGlzdCxcbiAgcHJvamVjdFNlbGVjdG9yLFxuICBjdXJyZW50VGFza1NlbGVjdGlvbixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0IGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==