const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const fullList = document.querySelector('.list-tasks');

let tasks = [];

function addTask() {
    tasks.push(input.value);
    renderTasks();
    input.value = "";
}

function renderTasks() {
    let newList = "";
    tasks.forEach(task => {
        newList = newList + `
        <li class="task">
                <img src="./img/checked.png" alt="Check">
                <p>${task}</p>
                <img src="./img/trash.png" alt="Lixeira">
            </li>
            `;
    });
    fullList.innerHTML = newList;
}

button.addEventListener('click', addTask);