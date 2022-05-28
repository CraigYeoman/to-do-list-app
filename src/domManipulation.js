import task from "./task"

const example = task('Exampe', 'Personal', 'High', '10/23/22', 'incomplete', 'This is the example', 'Make sure is is an example');

function addTask(example) {
    const taskColumn = document.querySelector('.task')
    taskColumn.textContent = example.title;

}




export default addTask;