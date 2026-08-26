
import {showTodos} from './renders.js';
import {setData, getData} from './storage.js';

// Обработчик изменения чекбокса
export function checkboxHandler(checkbox, todosContainer){
    const todo = checkbox.closest('.task-todo-container');
    if(!todo){
        return;
    }
    todo.classList.toggle('checked');

    const todos = getData();

    const found = todos.find(t => t.id === todo.id);

    if(found){
        found.isChecked = checkbox.checked;
    }
    
    setData(todos);
    showTodos(todos, todosContainer);
}

// Обработчик удаления одной задачи по ID
export function deleteBtnHandler(deleteBtn, todosContainer){
    const todo = deleteBtn.closest('.task-todo-container');
    if(!todo){
        return;
    }

    const todos = getData();
    
 
    const newTodo = todos.filter(t => t.id !== todo.id);

    setData(newTodo);
    showTodos(newTodo, todosContainer);
}

