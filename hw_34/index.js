// С ниже приведенным объектом решить следующие задачи:

const subjects = {
    mathematics: {
    students: 200,
    teachers: 6
    },
    biology: {
    students: 120,
    teachers: 6
    },
    geography: {
    students: 60,
    teachers: 2
    },
    chemistry: {
    students: 100,
    teachers: 3
    }
}

// 1. Создать строку из названий предметов написанных через запятую

let result = Object.keys(subjects).join(', ');
console.log(result);

// 2. Подсчитать общее количество студентов и учителей на всех предметах

let students = 0;
let teachers = 0;

for(let key in subjects){
    students += subjects[key].students;
    teachers += subjects[key].teachers;
}
console.log(`Количество студентов: ${students}. Количество учителей: ${teachers}.`);

// 3. Получить среднее количество студентов на всех предметах

let totalStudents = 0;
let count = 0;

for(let key in subjects){
    totalStudents += subjects[key].students;
    count++;   
}
let avrg = totalStudents / count;
console.log(avrg);

// 4. Создать массив из объектов предметов

const arr = Object.entries(subjects).map(([key, value]) =>{
    return{
        subject: key,
        ...value,
    }
})
console.log(arr);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему

const sortSubjects = arr.slice().sort((a, b)=>{
    return b.teachers - a.teachers;
})
console.log(sortSubjects);
