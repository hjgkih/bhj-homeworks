const taskAddBtn = document.getElementById('tasks__add');
const taskFieldText = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

taskAddBtn.onclick = () => {
  if(taskFieldText.value.trim() == '') {
    return false;
  }

  tasksList.insertAdjacentHTML('beforeend', 
    `<div class="task">
      <div class="task__title">${taskFieldText.value}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>`);
  
  taskFieldText.value = ''; 

  return false; 
}


tasksList.addEventListener('click', (i) => {
  if(i.target.classList.contains('task__remove')){
    i.target.closest('.task').remove()
  }
})