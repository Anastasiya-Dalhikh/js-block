
/* Задача 1.
Дан массив:
const colors = ['red', 'green', 'blue']
Выведите в консоль его длину. */

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

/* Задача 2.
Дан массив:
const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны. */

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

/* Задача 3.
Дан массив:
const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.
Реализуйте решение двумя способами. */

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0); // numbers.length = 0
console.log(numbers);


/* Задача 4.
Дан массив:
const students = ['Polina', 'Dasha', 'Masha']
Удалите последний элемент массива, затем вместо него добавьте в массив
студента Borya .
Удалите первый элемент массива, затем вместо него добавьте в массив
студента Andrey .
Полученный результат не забудьте вывести в консоль.
 */

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

/* Задача 5.
Дан массив:
const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл for ,
затем for..of  */

const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for(const cat of cats){
    console.log(cat);
}

/* Задача 6.
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8 */

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const newArr = evenNumbers.concat(oddNumbers);
console.log(newArr);

for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === 8){
        console.log(i);
    }    
}
console.log(newArr.indexOf(8));

/* Задача 7.
Дан массив:
const binary = [0, 0, 0, 0]
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.
[0, 0, 0, 0] -> '0101010' */

const binary = [0, 0, 0, 0];

const str = binary.join('1');
console.log(str);

