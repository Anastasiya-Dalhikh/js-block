import {createTodo} from './dom.js';


//Отрисовывает список задач в указанном контейнере
export function showTodos(todos, todosContainer){
  
    todosContainer.innerHTML = '';
    
  
    todos.forEach(({id, text, isChecked})=>{
        const todo = createTodo(text);
        todo.id = id;
        todosContainer.append(todo);

        if(isChecked){
            const checkbox = todo.querySelector('.todo-checkbox');
            checkbox.checked = isChecked;
            todo.classList.add('checked');
        }
    });

    
}
