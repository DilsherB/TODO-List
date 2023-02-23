import tasks from './curd.js';

const clearAll = document.querySelector('.clearAll');
clearAll.addEventListener('click', () => {
  const filteredData = tasks.filter((e) => e.completed === false);
  filteredData.forEach((e, i) => e.id = i + 1); // eslint-disable-line
  localStorage.setItem('newItem', JSON.stringify(filteredData));
  window.location.reload();
});