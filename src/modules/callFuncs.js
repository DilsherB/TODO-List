import tasks from './storage.js';
import { showTrashIcon, hideTrashIcon, updateTask, removeTask, trueFalse, clearAllSelected, gettask } from './functions.js';

const callingFuncs = () => {
  const clearAll = document.querySelector('.clearAll');
  const trash = document.querySelectorAll('.fa-trash-can');
  const deleteIcon = document.querySelectorAll('.deleteIcon');
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const currentTask = document.querySelectorAll('.currentTask');
  for (let i = 0; i < checkbox.length; i += 1) {
    deleteIcon[i].addEventListener('mouseover', () => showTrashIcon(i));
    deleteIcon[i].addEventListener('mouseout', () => hideTrashIcon(i));
    trash[i].addEventListener('click', () => removeTask(tasks, i));
    checkbox[i].addEventListener('change', () => trueFalse(tasks, i));
    currentTask[i].addEventListener('keydown', (e) => {
      if (e.code === 'Enter') updateTask(tasks, i)
    });
    clearAll.addEventListener('click', () => clearAllSelected(tasks));
  }
  document.querySelector('.fa-angle-down').addEventListener('click', gettask(tasks));
  document.querySelector('.newItem').addEventListener('keydown', (e) => {
    if (e.code === 'Enter') gettask(tasks);
  });
}

export { callingFuncs };