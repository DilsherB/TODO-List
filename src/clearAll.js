import tasks from './curd.js';
// import { dots, trash, deleteIcon, checkbox, currentTask } from './index.js';

const clear = () => {
  const dots = document.querySelectorAll('.dots');
  const trash = document.querySelectorAll('.fa-trash-can');
  const deleteIcon = document.querySelectorAll('.deleteIcon');
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const currentTask = document.querySelectorAll('.currentTask');
  for (let i = 0; i < checkbox.length; i += 1) {
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
    checkbox[i].addEventListener('change', () => {
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

  const clearAll = document.querySelector('.clearAll');
  clearAll.addEventListener('click', () => {
    const filteredData = tasks.filter((e) => e.completed === false);
    filteredData.forEach((e, i) => e.id = i + 1); // eslint-disable-line
    localStorage.setItem('newItem', JSON.stringify(filteredData));
    window.location.reload();
  });
};

export default clear;