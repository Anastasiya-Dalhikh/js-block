/* Задача 1.
Выведи все элементы массива в консоль с помощью метода forEach . */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// 
function showFibonacci (arr){
    arr.forEach(item => {
        console.log(item);
    });
}
showFibonacci (fibonacci);

// 
const showFibonacci2 = (arr) => {
    arr.forEach(item => {
        console.log(item);
    });
}
showFibonacci (fibonacci);

/* Задача 2.
Используя метод map создайте новый массив, на основе массива users , в
котором каждый элемент массива будет содержать строку вида:
['member 1: Darya', 'member 2: Masha', ... etc] . */

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// 
function showUsers (arr){
    const result = arr.map((user, index) => `Member ${index + 1}: ${user}`);
    console.log(result);
}
showUsers (users);

// 
const showUsers2 = (arr) => {
    const result = arr.map((user, index) => `Member ${index + 1}: ${user}`);
    console.log(result);
}
showUsers2 (users);

/* Задача 3.
С помощью метода filter создайте новый массив в котором не будет
отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow
function. */

const numbers = [7, -4, 32, -90, 54, 32, -21];

// 
function filterNums (arr){
    const result = arr.filter(num => num > 0);
    console.log(result);
}
filterNums (numbers);

// 
const filterNums2 = (arr) => {
    const result = arr.filter(num => num > 0);
    console.log(result);
}
filterNums2 (numbers);

/* Задача 4.
Используя метод reduce получите сумму всех чисел массива. */

const fibonacciNew = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// 
function getSum (arr){
    const result = arr.reduce((sum, item) => sum + item, 0);
    console.log(result);
}
getSum (fibonacciNew);

// 
const getSum2 = (arr) =>{
    const result = arr.reduce((sum, item) => sum + item, 0);
    console.log(result);
}
getSum2 (fibonacciNew);

/* Задача 5.
Используя метод find найдите в массиве первое четное число. */

const nums = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// 
function findEvenNum (arr){
    const result = arr.find(num => num % 2 === 0);
    console.log(result);
}
findEvenNum (nums);

// 
const findEvenNum2 = (arr) =>{
    const result = arr.find(num => num % 2 === 0);
    console.log(result);
}
findEvenNum2 (nums);
