// Ключ для хранения данных в localStorage
const todosLSKey = 'todosTask';

//Получает данные из localStorage
export function getData(){

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
//Сохраняет данные в localStorage
export function setData(data){
    
    localStorage.setItem(todosLSKey, JSON.stringify(data));
}
