import './style.css';

const tasks = [
  { description: 'Wash the dishes', completed: false, index: 1 },
  { description: 'Complete to do list Project', completed: true, index: 2 },
];

const list = document.querySelector('#listItems');
tasks.forEach((task) => {
  if (task.completed) {
    list.innerHTML += `<li class="deleteIcon">
    <span>
      <input type="checkbox" id="${task.index}" checked> 
      <span class="lm">${task.description}</span>
    </span>
    <span class="center">
      <i class="fa-solid fa-ellipsis-vertical dots"></i>
      <i class="fa-solid fa-trash-can hidden"></i>
    </span>
    </li>`;
  } else {
    list.innerHTML += `<li class="deleteIcon">
    <span>
      <input type="checkbox" id="${task.index}"> 
      <span class="lm">${task.description}</span>
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
for (let i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener('mouseover', () => {
    dots[i].classList.add('hidden');
    trash[i].classList.remove('hidden');
  });
  deleteIcon[i].addEventListener('mouseout', () => {
    dots[i].classList.remove('hidden');
    trash[i].classList.add('hidden');
  });
}