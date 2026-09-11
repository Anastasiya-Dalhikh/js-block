const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

function getTodos(){

    fetch(TODOS_URL)
    .then((response) =>{
        if(!response.ok){
            throw new Error ('Ошибка. Статус: ', response.status);
        }
        return response.json();
    })
    .then((todos)=>{
        console.log(todos);
        printTodos(todos);
    })
    .catch((error)=>{
        console.error(error);
    })
}

function printTodos(todos){
    const menu = document.createElement('ul');
    const fragment = document.createDocumentFragment();

    todos.forEach(todo =>{
        const list = document.createElement('li');
        list.textContent = `${todo.id}: ${todo.title}`;
        fragment.append(list);
    });
    menu.append(fragment);
    document.body.append(menu);
}
getTodos();