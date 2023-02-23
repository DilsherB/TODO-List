import './style.css';
import clear from './clearAll.js';
import tasks from './curd.js';

const list = document.querySelector('#listItems');
tasks.forEach((task) => {
  if (task.completed) {
    list.innerHTML += `<li class="deleteIcon">
    <span>
      <input type="checkbox" id="${task.id}" checked> 
      <span contenteditable="true" class="currentTask">${task.description}</span>
    </span>
    <span class="center">
      <i class="fa-solid fa-ellipsis-vertical dots"></i>
      <i class="fa-solid fa-trash-can hidden"></i>
    </span>
    </li>`;
  } else {
    list.innerHTML += `<li class="deleteIcon">
    <span>
      <input type="checkbox" id="${task.id}"> 
      <span contenteditable="true" class="currentTask">${task.description}</span>
    </span>
    <span class="center">
      <i class="fa-solid fa-ellipsis-vertical dots"></i>
      <i class="fa-solid fa-trash-can hidden"></i>
    </span>
    </li>`;
  }
});
clear();