const root = document.querySelector('#root');


function createEl(tag, options = {}) {
    const el = document.createElement(tag);

    if(options.classes){
        el.classList.add(options.classes);
    }

    if(options.id){
        el.id = options.id;
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
    const todo = createEl('div', {
    classes: 'task-todo-container',
    id: generateId()  
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
todo.append(checkboxLabel);


const textSpan = createEl('span',{
    classes: 'todo-text',
    text: text   
}); 
todo.append(textSpan);

const deleteBtn = createEl('button',{
    classes: 'todo-delete-btn',
    text: 'x'
});
todo.append(deleteBtn);

const dateInput = createEl('input',{
    classes: 'todo-date',
    type: 'text',
    value: new Date().toISOString().split('T')[0].split('-').reverse().join('.')
});
todo.append(dateInput);



return todo;

}



// const newTodo = createTodo('Купить продукты');
// container.append(newTodo); 

// const newTodo2 = newTodo.cloneNode(true);
// container.append(newTodo2);

root.append(divWrapper);



function checkboxHandler(checkbox){
    const todo = checkbox.closest('.task-todo-container');
    if(!todo){
        return;
    }
    todo.classList.toggle('checked');

    const todos = getData();
    // for(let i = 0; i < todos.length; i++){
    //     if(todos[i].id === todo.id){
    //         todos[i].isChecked = checkbox.checked;
    //         break;
    //     }
    // }
    const found = todos.find(t => t.id === todo.id);

    if(found){
        found.isChecked = checkbox.checked;
    }
    
    setData(todos);
}

function deleteBtnHandler(deleteBtn){
    const todo = deleteBtn.closest('.task-todo-container');
    if(!todo){
        return;
    }
    todo.remove();


    const todos = getData();
    
    // const newTodo = [];
    // for(let i = 0; i < todos.length; i++){
    //     if(todos[i].id !== todo.id){
    //         newTodo.push(todos[i]);
    //     }
    // }
    
    const newTodo = todos.filter(t => t.id !== todo.id);

    setData(newTodo);
    
}




container.addEventListener('click', (e)=>{

    const deleteBtn = e.target.closest('.todo-delete-btn');
    if(deleteBtn){
        deleteBtnHandler(deleteBtn);
        return;
    }

    const checkbox = e.target.closest('.todo-checkbox');
    if(checkbox){
        checkboxHandler(checkbox);
        return;
    }

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

        const todos = getData();

        todos.push({
            id: newTodo.id,
            date: new Date().toISOString().split('T')[0].split('-').reverse().join('.'),
            text: text,
            isChecked: false
        });
        setData(todos);

        input.value = '';
        input.focus();
    }
    
});

deleteAllBtn.addEventListener('click', ()=>{
    const todos = document.querySelectorAll('.task-todo-container');
    todos.forEach(todo => todo.remove());

    localStorage.removeItem(todosLSKey);
});

// localStorage.setItem('todos', JSON.stringify([]));

const todosLSKey = 'todosTask';

function getData(){

    
    const todosFromStorage = localStorage.getItem(todosLSKey);

    if(!todosFromStorage ){
        return [];
    }

    try{
       return JSON.parse(todosFromStorage);
    }catch{
        return [];
    }
        
   
    
}

function setData(data){
    
    
    localStorage.setItem(todosLSKey, JSON.stringify(data));
}


function generateId(){
    return Date.now();
}



function showTodos(){
  
    const todos = getData();
  
    for(let i = 0; i < todos.length; i++){
        const todo = createTodo(todos[i].text);
        todo.id = todos[i].id;
        container.append(todo);

        if(todos[i].isChecked){
            const checkbox = todo.querySelector('.todo-checkbox');
            checkbox.checked = todos[i].isChecked;
            todo.classList.add('checked');
        }
    }

    
}
showTodos();

