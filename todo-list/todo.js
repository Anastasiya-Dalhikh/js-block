
import {createEl, createTodo, generateId} from './dom.js';
import {checkboxHandler, deleteBtnHandler} from './handlers.js';
import {showTodos} from './renders.js';
import {getData, setData } from './storage.js';

const root = document.querySelector('#root');

const divWrapper = createEl('div',{
    classes: 'todo-container',
    // parent: root
});

const container = createEl('div', {
    classes: 'container'  
});

const todosContainer = createEl('div', {
    classes: 'todos-container'
});

const todoForm = createEl('form', {
    classes: 'todo-form'  
});

const deleteAllBtn = createEl('button', {
    classes: 'delete-all-btn',
    text: 'Delete All',
    type: 'button'    
});

const input = createEl('input', {
    classes: 'main-input',
    placeholder: 'Enter todo ...',
    type: 'text'   
});

const addBtn = createEl('button', {
    classes: 'add-btn',
    text: 'Add',
    type: 'submit'   
});

divWrapper.append(container);
container.append(todoForm);
container.append(todosContainer);
todoForm.append(deleteAllBtn);
todoForm.append(input);
todoForm.append(addBtn);

root.append(divWrapper);

//Загрузка данных
const todos = getData();
showTodos(todos, todosContainer);




// Обработчик кликов (делегирование)
container.addEventListener('click', (e)=>{

    const deleteBtn = e.target.closest('.todo-delete-btn');
    if(deleteBtn){
        deleteBtnHandler(deleteBtn, todosContainer);
        return;
    }

    const checkbox = e.target.closest('.todo-checkbox');
    if(checkbox){
        checkboxHandler(checkbox, todosContainer);
        return;
    }

});

// Обработчик добавления задачи
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const text = input.value.trim();

    if(text === ''){
        return;
    }

    if(text){
        const newTodo = createTodo(text);
        // todosContainer.append(newTodo);

        const todos = getData();

        todos.push({
            id: newTodo.id,
            date: new Date().toISOString().split('T')[0].split('-').reverse().join('.'),
            text: text,
            isChecked: false
        });
        setData(todos);
        showTodos(todos, todosContainer);

        input.value = '';
        input.focus();
    }
    
});

// Обработчик удаления всех задач
deleteAllBtn.addEventListener('click', ()=>{
    const emptyTodos =[];
    setData(emptyTodos);
    showTodos(emptyTodos, todosContainer);

});


