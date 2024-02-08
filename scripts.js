const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

function addTask() {
    console.log(input.value);
  }

button.addEventListener('click', addTask);