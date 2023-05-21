const taskField = document.getElementById('tasks__form');
const taskFieldText = document.getElementById('task__input');
const tasksList = document.getElementById('tasks');

taskField.addEventListener('keypress', (event) => {
  if(event.code === 'Enter' && taskFieldText.value !== '') {
    tasksList.insertAdjacentHTML('beforeend', 
      `<div class="task">
         <div class="task__title">${taskFieldText.value}</div>
         <a href="#" class="task__remove">&times;</a>
       </div>`)
  
    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
  
    taskRemove.forEach((i) => {
      i.onclick = () => {
        i.closest('.task').remove();
      }
    })

    taskFieldText.value = '';   
    event.preventDefault();
   }
})


