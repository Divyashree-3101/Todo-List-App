document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        alert('Please enter a task.....');
        return;
    }


    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        const newTaskValue = prompt('Edit your task:', taskValue);
        if (newTaskValue !== null && newTaskValue.trim() !== '') {
            li.firstChild.textContent = newTaskValue; 
        }
    };


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}