const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const fullList = document.querySelector('.list-tasks');

let tasks = [];

function addTask() {
    tasks.push({
        task: input.value,
        done: false
    });

    input.value = "";
    renderTasks();
}

function renderTasks() {
    let newList = "";
    tasks.forEach((item, index) => {
        newList = newList + `
        <li class="task ${item.done && "complete"}">
                <img src="./img/checked.png" alt="Check" onclick="taskDone(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="Lixeira" onclick="delItem(${index})" >
            </li>
            `;
    });
    fullList.innerHTML = newList;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function delItem(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function taskDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();

}
function taskReload() {
    const localStorageTasks = localStorage.getItem('tasks');

    if (localStorageTasks) {
        tasks = JSON.parse(localStorageTasks);
        renderTasks();
    }

}

taskReload();
button.addEventListener('click', addTask);