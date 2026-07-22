/* Задача 1.
Создайте переменные, затем сложите их и выведите результат в консоль
разработчика. */

let x = 20;
let y = 58;
let z = 42;

const total = x + y + z;
console.log(total);

/* Задача 2.
Создайте переменные:
- количество секунд в минуте
- количество минут в часу
- количество часов в сутках
- количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в
переменную myAgeInSeconds */

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAge = 30;
const myAgeInSeconds = myAge * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(myAgeInSeconds);

/* Задача 3.
Создайте две переменные. Поместите в них переменную count и превратите в
строку, а userName наоборот в число. Попробуйте реализовать задачу двумя
разными способами. */

let count = 42;
let userName = '42';

const countAsString = String(count);
const userNameAsNumber = +userName;

console.log(countAsString);
console.log(userNameAsNumber);

/* Задача 4.
Имеется три переменные:

Сложите переменные так, чтобы в результате получилось выражение: 12 белых
медведей и результат выведите в консоль. */
let a = 1;
let b = 2;
let c = 'белых медведей';

const result1 = `${a}${b} ${c}.`
const result2 = String(a) + String(b) + ' ' + c + '.';
console.log(result1); 
console.log(result2);

/* Задача 5.
Создайте переменные и поместите в них нижеприведенные слова. Затем
создайте еще одну переменную lengthWords и посчитайте в ней длину всех слов
из списка:
- морпех
- наледь
- попрек
- рубило */

const word1 = 'морпех';
const word2 = 'наледь';
const word3 = 'попрек';
const word4 = 'рубило';

const lengthWords = word1.length + word2.length + word3.length + word4.length;
console.log(lengthWords);

/* Задача 6.
Создать 3 переменные разных типов и вывести в консоль для каждой из них
строку следующего вида:
`Variable: %variable name% have type: %type variable%` */

const num = 14;
const animal = 'dog';
const isClosed = true;

console.log(`Variable: ${num} have type: ${typeof num}`);
console.log(`Variable: ${animal} have type: ${typeof animal}`);
console.log(`Variable: ${isClosed} have type: ${typeof isClosed}`);

/* Задача 7.
Запросить у пользователя имя и возраст и вывести их в консоль */

const userName1 = prompt ('Please enter your name');
const userAge = prompt ('Please enter your age');

console.log(`Name: ${userName1}. Age: ${userAge}.`);
