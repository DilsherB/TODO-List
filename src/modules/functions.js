const showTrashIcon = (i) => {
  const dots = document.querySelectorAll('.dots');
  const trash = document.querySelectorAll('.fa-trash-can');
  dots[i].classList.add('hidden');
  trash[i].classList.remove('hidden');
};

const hideTrashIcon = (i) => {
  const dots = document.querySelectorAll('.dots');
  const trash = document.querySelectorAll('.fa-trash-can');
  dots[i].classList.remove('hidden');
  trash[i].classList.add('hidden');
};

const removeTask = (database, i) => {
  database.splice(i, 1);
    database.forEach((e, i) => e.id = i + 1); // eslint-disable-line
  localStorage.setItem('newItem', JSON.stringify(database));
  window.location.reload();
};

const updateTask = (database, i) => {
  const currentTask = document.querySelectorAll('.currentTask');
  database[i].description = currentTask[i].innerHTML;
  localStorage.setItem('newItem', JSON.stringify(database));
  window.location.reload();
};

const trueFalse = (database, i) => {
  const currentTask = document.querySelectorAll('.currentTask');
  if (database[i].completed) {
    database[i].completed = false;
    currentTask[i].classList.remove('strike');
  } else {
    database[i].completed = true;
    currentTask[i].classList.add('strike');
  }
  localStorage.setItem('newItem', JSON.stringify(database));
};

const clearAllSelected = (database) => {
  const filteredData = database.filter((e) => e.completed === false);
    filteredData.forEach((e, i) => e.id = i + 1); // eslint-disable-line
  localStorage.setItem('newItem', JSON.stringify(filteredData));
  window.location.reload();
};

const gettask = (database) => {
  const newItem = document.querySelector('.newItem').value;
  if (newItem.trim() === '') return;
  database.push({ description: `${newItem}`, completed: false, id: database.length + 1 });
  localStorage.setItem('newItem', JSON.stringify(database));
  window.location.reload();
  document.querySelector('.newItem').value = '';
};

export {
  showTrashIcon, hideTrashIcon, updateTask, removeTask, trueFalse, clearAllSelected, gettask,
};