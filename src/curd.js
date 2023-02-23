const tasks = JSON.parse(localStorage.getItem('newItem')) || [];
const gettask = () => {
  const newItem = document.querySelector('.newItem').value;
  if (newItem.trim() === '') return;
  tasks.push({ description: `${newItem}`, completed: false, id: tasks.length + 1 });
  localStorage.setItem('newItem', JSON.stringify(tasks));
  window.location.reload();
  document.querySelector('.newItem').value = '';
};
document.querySelector('.fa-angle-down').addEventListener('click', gettask);
document.querySelector('.newItem').addEventListener('keydown', (e) => {
  if (e.code === 'Enter') gettask();
});

export default tasks;