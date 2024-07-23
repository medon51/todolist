document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(li);

        li.querySelector('.delete-button').addEventListener('click', function() {
            li.remove();
        });
    }
});
