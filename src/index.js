import './style.css';
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

const dots = document.querySelectorAll('.dots');
const trash = document.querySelectorAll('.fa-trash-can');
const deleteIcon = document.querySelectorAll('.deleteIcon');
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const currentTask = document.querySelectorAll('.currentTask');
for (let i = 0; i < deleteIcon.length; i += 1) {
  deleteIcon[i].addEventListener('mouseover', () => {
    dots[i].classList.add('hidden');
    trash[i].classList.remove('hidden');
  });
  deleteIcon[i].addEventListener('mouseout', () => {
    dots[i].classList.remove('hidden');
    trash[i].classList.add('hidden');
  });
  trash[i].addEventListener('click', () => {
    tasks.splice(i, 1);
    tasks.forEach((e, i) => e.id = i + 1); // eslint-disable-line
    localStorage.setItem('newItem', JSON.stringify(tasks));
    window.location.reload();
  });
  checkbox[i].addEventListener('input', () => {
    if (tasks[i].completed) {
      tasks[i].completed = false;
      currentTask[i].classList.remove('strike');
    } else {
      tasks[i].completed = true;
      currentTask[i].classList.add('strike');
    }
    localStorage.setItem('newItem', JSON.stringify(tasks));
  });
  currentTask[i].addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      tasks[i].description = currentTask[i].innerHTML;
      localStorage.setItem('newItem', JSON.stringify(tasks));
      window.location.reload();
    }
  });
}
