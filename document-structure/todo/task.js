const task = document.getElementById('tasks');
const form = document.querySelector('form');
const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const div = document.createElement('div');
    div.classList.add('task')
    div.innerHTML = `
  <div class="task__title">${taskInput.value}</div>
  <a href="#" class="task__remove">&times;</a>`;
    const removeBtn = div.querySelector('.task__remove');
    removeBtn.addEventListener('click', () => {
        div.remove()
    })
    taskList.append(div);
    taskInput.value = '';
})

