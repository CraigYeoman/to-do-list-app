const tasks = [{
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

const task = (title, project, priority, dueDate, completion, id) => ({title, project, priority, dueDate, completion, id})

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
  const projects = [];
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (projects.includes(tasks[i].project)) {
        ;
    } else projects.push(tasks[i].project);
  }
  return projects;
}

function projectSelector(e) {
  const currentTaskSelection = [];
  for (let i = 0; i <= tasks.length - 1; i++) {
    const current = tasks[i];
    const currentA = Object.values(current);
    if (currentA.includes(e.target.id)) {
      currentTaskSelection.push(tasks[i]);
    }
  }
  return currentTaskSelection;
}

let currentTaskSelection = tasks;

export {
  addTask,
  deleteTask,
  tasks,
  projectList,
  projectSelector,
  currentTaskSelection,
};
