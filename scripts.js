const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let tasks = [];



function addTask() {
    tasks.push(input.value);
    renderTasks();
  }

function renderTasks(){

    let newList =
    addTask.forEach(task => {
        newList = newList +`
        <li class="task">
                <img src="./img/checked.png" alt="Check">
                <p>${task}</p>
                <img src="./img/trash.png" alt="Lixeira">
            </li>
            `
})
  
}

button.addEventListener('click', addTask);