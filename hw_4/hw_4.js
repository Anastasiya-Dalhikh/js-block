/* Задача 1.
Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
переданного в нее параметра. Если передадим число 100 то, надо вычислить
сумму чисел от 0 до 100 (должно получится 5050). */

function getSum (num){
    let result = 0;
    for(let i = 0; i <= num; i++){
        result += i;
    }
    return result;
}
console.log(getSum(100));


/* Задача 2.
Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
который хочет получить клиент и верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не
увеличивается */

function getOverpayments(creditSum){
    const years = 5;
    const rate = 0.17; 
   
    
    // Сложные проценты: S = P * (1 + r)^n
    const totalAmount = creditSum * Math.pow(1 + rate, years);
    const overpayment = totalAmount - creditSum;
    
    return overpayment;
}
console.log(getOverpayments(10000)); // честно сказать ии помогло - до меня не доходило как реализовать

/* Задача 3.
Написать функцию trimString , которая в качестве аргумента принимает три
параметра:
строку
значение «от»
значение «по»
После вызова функция должна вернуть переданную строку, обрезанную по
значениям «от» и «по» */

function trimString(str, from, to){
    if(typeof str !== 'string'){
        console.error('Ошибка');
        return null;
    }

    let result = '';
    for(let i = from; i < to; i++){
        result += str[i];
    }

    return result;
}
console.log(trimString('Hello, my friend!', 2, 9));

/* Задача 4.
Написать функцию getSumNumbers . Она будет принимать число и вычислять
сумму цифр, из которых состоит число. Для 2021 это будет 5. */

function getSumNumbers (number){
    let totalSum = 0;
    let num = number.toString();
    for(let i = 0; i < num.length; i++){
        totalSum += Number(num[i]);
    }
    return totalSum;
}
console.log(getSumNumbers(2021));


/* Задача 5.
4. Функции4Написать функцию getSum , которая принимает два целых числа a и b, они могут
быть положительными или отрицательными, найти сумму всех чисел между
ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
getSum(1, 0) == 1 // 1 + 0 = 1
getSum(1, 2) == 3 // 1 + 2 = 3
getSum(0, 1) == 1 // 0 + 1 = 1
getSum(1, 1) == 1 // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2 */

function getSum(a, b){
    if(a === b){
        return a;
    }
    let sum = 0;
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
    
} 
console.log(getSum(2,3));
console.log(getSum(-2,3));
console.log(getSum(3,3));
console.log(getSum(5,6));

/* Задача 6.
Напишите функцию fooBoo которая принимает в качестве аргумента три
параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true , то запускаем функцию foo, иначе boo. */


function fooBoo(booleanValue, foo, boo){
    if(booleanValue === true){
        foo();
    }else{
        boo();
    }
}

function foo(){
    console.log('foo');
}

function boo(){
    console.log('boo');
}

fooBoo(false, foo, boo);