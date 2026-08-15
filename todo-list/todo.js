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

    if (options.children) {
        options.children.forEach(child => {
            el.append(child);
        });
    }
    
    if (options.parent) {
        options.parent.append(el);
    }
    
    return el;
}

const divWrapper = createEl('div',{
    classes: 'todo-container',
    // parent: root
});

const container = createEl('div', {
    classes: 'container',
    parent: divWrapper
});

const todoSection = createEl('div', {
    classes: 'todo-section',
    parent: container
});

const deleteAllBtn = createEl('button', {
    classes: 'delete-all-btn',
    text: 'Delete All',
    parent: todoSection
});

const input = createEl('input', {
    classes: 'main-input',
    placeholder: 'Enter todo ...',
    type: 'text',
    parent: todoSection
});

const addBtn = createEl('button', {
    classes: 'add-btn',
    text: 'Add',
    parent: todoSection
});



function createTodo(text, date = ''){
    const todo1 = createEl('div', {
    classes: 'first-todo-container',
    // parent: container
});

const checkbox = createEl('input', {
    classes: 'todo-checkbox',
    type: 'checkbox',

});

const customCheckbox = createEl('span', {
    classes: 'custom-checkmark',
        
});

const checkboxLabel = createEl('label', {
    classes: 'todo-checkbox-label',
    children: [checkbox, customCheckbox],
    parent: todo1
});

const textSpan = createEl('span',{
    classes: 'todo-text',
    text: text,
    parent: todo1
}); 

const deleteBtn = createEl('button',{
    classes: 'todo-delete-btn',
    text: 'x',
    parent: todo1
});

const dateInput = createEl('input',{
    classes: 'todo-date',
    type: 'date',
    value: date,
    parent: todo1
});

return todo1;

}

root.append(divWrapper);

const newTodo = createTodo('Купить продукты');
container.append(newTodo); 



