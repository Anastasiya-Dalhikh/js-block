const root = document.querySelector('#root');


function createEl(tag, options = {}) {
    const el = document.createElement(tag);

    if(options.classes){
        el.classList.add(options.classes);
    }

    if (options.text) {
        el.textContent = options.text;
    }

    if (options.placeholder) {
        el.placeholder = options.placeholder;
    }    
    if (options.type){
        el.type = options.type;
    } 
    if (options.value){
        el.value = options.value;
    } 
 
    
    return el;
}

const divWrapper = createEl('div',{
    classes: 'todo-container',
    // parent: root
});

const container = createEl('div', {
    classes: 'container'  
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
todoForm.append(deleteAllBtn);
todoForm.append(input);
todoForm.append(addBtn);

function createTodo(text, date = ''){
    const todo1 = createEl('div', {
    classes: 'first-todo-container'  
});

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
todo1.append(checkboxLabel);


const textSpan = createEl('span',{
    classes: 'todo-text',
    text: text   
}); 
todo1.append(textSpan);

const deleteBtn = createEl('button',{
    classes: 'todo-delete-btn',
    text: 'x'
});
todo1.append(deleteBtn);

const dateInput = createEl('input',{
    classes: 'todo-date',
    type: 'date',
    value: date   
});
todo1.append(dateInput);

checkbox.addEventListener('change', ()=>{
    todo1.classList.toggle('checked');
})

return todo1;

}



const newTodo = createTodo('Купить продукты');
container.append(newTodo); 

// const newTodo2 = newTodo.cloneNode(true);
// container.append(newTodo2);

root.append(divWrapper);




container.addEventListener('click', (e)=>{
    const deleteBtn = e.target.closest('.todo-delete-btn');
    if(!deleteBtn){
        return;
    }

    const todo1 = deleteBtn.closest('.first-todo-container');
    if(!todo1){
        return;
    }

    todo1.remove();
});


todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const text = input.value.trim();

    if(text === ''){
        return;
    }

    if(text){
        const newTodo = createTodo(text);
        container.append(newTodo);
        input.value = '';
        input.focus();
    }
    
});

deleteAllBtn.addEventListener('click', ()=>{
    const todos = document.querySelectorAll('.first-todo-container');
    todos.forEach(todo => todo.remove());
});