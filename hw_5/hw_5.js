/* Задача 1.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
удалить ключи из объекта */

const student1 = {
    id: 1,
    grades: [8, 9, 9],
}
console.log(student1);

delete student1.id;
delete student1.grades;


/* Создать любой объект с двумя ключами и любыми значениями в них, а затем
проверить есть ли в объекте определенный ключ и если есть вывести в
консоль true  */

const book = {
    year: 1863,
    name: 'War and Peace',
}
console.log(book.hasOwnProperty('year'));
console.log(book.hasOwnProperty('author'));

/* Задача 3.
Дан объект:
const student = {
name: 'John',
age: 19,
isHappy: true
}
C помощью цикла for..in вывести в консоль сначала все ключи, потом
значения ключей объект */

const student2 = {
name: 'John',
age: 19,
isHappy: true
}

for(let key in student2){
    console.log(`Ключи: ${key}`);
    console.log(`Значения: ${student2[key]}`);
}

/* Задача 4.
Дан объект:
const colors = {
'ru pum pu ru rum': {
red: 'красный',
green: 'зеленый',
blue: 'синий'
},
}
Вывести в консоль слово красный и синий */

const colors = {
'ru pum pu ru rum': {
red: 'красный',
green: 'зеленый',
blue: 'синий'
},
}
console.log(`${colors['ru pum pu ru rum'].red} и ${colors['ru pum pu ru rum'].blue}`);

/* Задача 5.
Дан объект:
let salaries = {
andrey: 500,
sveta: 413,
anton: 987,
igor: 664,
alexandra: 199
}
Вычислите среднюю зарплату сотрудников и результат поместите в
соответствующую переменную */

let salaries = {
andrey: 500,
sveta: 413,
anton: 987,
igor: 664,
alexandra: 199
}
let totalSum = 0;
let count = 0;
for(let key in salaries){
    totalSum += salaries[key];
    count++;  // тут я немного не поняла как разделить сумму на количество человек - count++ это как подсчет человек?
}
let averageSalary = totalSum / count;
console.log(averageSalary);

/* Задача 6.
Создать валидатор, запросить у пользователя логин и пароль для регистрации.
Затем данные записать в объект.
Потом попросить пользователя подтвердить данные. Если верно введен логин
и пароль, вывести сообщение Добро пожаловать .
 */

const correctLogin = 'admin';
const correctPassword = '12345';

const userLogin = prompt('Please enter your login');
const userPassword = prompt('Please enter your password');

const user = {
    login:userLogin,
    password:userPassword,
}
for (let key in user){
    if(user.login === correctLogin && user.password === correctPassword){
        console.log('Добро пожаловать');
    }else{
        console.log('Логин или пароль неверен');
    }
}
// console.log(user);