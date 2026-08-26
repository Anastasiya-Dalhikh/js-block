/* создаем DOM элементы */
export function createEl(tag, {classes, id, text, placeholder, type, value} = {}) {
    const el = document.createElement(tag);

    if(classes){
        el.classList.add(classes);
    }

    if(id){
        el.id = id;
    }

    if (text) {
        el.textContent = text;
    }

    if (placeholder) {
        el.placeholder = placeholder;
    }    
    if (type){
        el.type = type;
    } 
    if (value){
        el.value = value;
    } 
 
    
    return el;
}

/* Создаем todo задачу */

export function createTodo(text, date = ''){
    const todo = createEl('div', {
    classes: 'task-todo-container',
    id: generateId()  
});

// Чекбокс
const checkbox = createEl('input', {
    classes: 'todo-checkbox',
    type: 'checkbox'
});

const customCheckbox = createEl('span', {
    classes: 'custom-checkmark'       
});

const checkboxLabel = createEl('label', {
    classes: 'todo-checkbox-label'   
});

checkboxLabel.append(checkbox, customCheckbox);
todo.append(checkboxLabel);

 // Текст
const textSpan = createEl('span',{
    classes: 'todo-text',
    text: text   
}); 
todo.append(textSpan);

// Кнопка удаления
const deleteBtn = createEl('button',{
    classes: 'todo-delete-btn',
    text: 'x'
});
todo.append(deleteBtn);

// Дата
const dateInput = createEl('input',{
    classes: 'todo-date',
    type: 'text',
    value: new Date().toISOString().split('T')[0].split('-').reverse().join('.')
});
todo.append(dateInput);



return todo;

}

/* Генерирует уникальный ID */

export function generateId(){
    return Date.now();
}
