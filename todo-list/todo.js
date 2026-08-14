const root = document.querySelector('#root');

const divWrapper = document.createElement('div');
divWrapper.classList.add('todo-container');

root.append(divWrapper);

const container = document.createElement('div');
container.classList.add('container');

divWrapper.append(container);

const todoSection = document.createElement('div');
todoSection.classList.add('todo-section');

container.append(todoSection);

const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('delete-all-btn');
deleteAllBtn.textContent = 'Delete All';

todoSection.append(deleteAllBtn);

const input = document.createElement('input');
input.classList.add('main-input');
input.placeholder = 'Enter todo ...';
input.type = 'text';
console.log(todoSection);

todoSection.append(input);

const addBtn = document.createElement('button');
addBtn.classList.add('add-btn');
addBtn.textContent = 'Add';

todoSection.append(addBtn);

////////////////* TODO-TEXT-ELEMENT  */////////////////

const todo1 = document.createElement('div');
todo1.classList.add('first-todo-container');

container.append(todo1);


const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'todo-checkbox';


todo1.append(checkbox);


const customCheckbox = document.createElement('span');
customCheckbox.classList.add('custom-checkmark');


const checkboxLabel = document.createElement('label');
checkboxLabel.classList.add('todo-checkbox-label');
checkboxLabel.append(checkbox);
checkboxLabel.append(customCheckbox);

todo1.append(checkboxLabel);


const textSpan = document.createElement('span');
textSpan.classList.add('todo-text');

todo1.append(textSpan);


const deleteBtn = document.createElement('button');
deleteBtn.classList.add('todo-delete-btn');
deleteBtn.textContent = 'x';
todo1.append(deleteBtn);


const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.classList.add('todo-date');

todo1.append(dateInput);


const todo2 = todo1.cloneNode(true); 
container.append(todo2);






