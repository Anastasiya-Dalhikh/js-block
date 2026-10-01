type User = {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: User[] = [
    {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
    },
    {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
    },
    {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую

function joinStringNames<T extends Record<K, string>, K extends keyof T>(items: T[], key: K): string{
    return items.map(item => item[key]).join(', ');
}

const namesOfUsers: string = joinStringNames(users, 'name');

// 2. Подсчитать общее количество машин у пользователей

function countUsersCars<T extends Partial<Record<K, string[]>>, K extends keyof T>(items: T[], key: K): number{
    return items.reduce((sum, item) => sum + (item[key]?.length ?? 0), 0);
}

const totalOfCars = countUsersCars(users, 'cars');

// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования

function getUsersWithEducation<T extends Pick<User, 'hasEducation'>>(items: T[]){
    return items.filter(item => item.hasEducation)
}

const usersWithEducation = getUsersWithEducation(users);

// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных

function getUsersWithAnimals<T extends Pick<User, 'animals'>>(items: T[]){
    return items.filter(item => Array.isArray(item.animals) && item.animals.length > 0);
}

const usersWithAnimals = getUsersWithAnimals(users);

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую

function getNamesOfCars<T extends Partial<Record<K, string[]>>, K extends keyof T>(items: T[], key: K): string{
    return items.flatMap(item => item[key] ?? []).join(', ');
}

const namesOfUsersCars = getNamesOfCars(users, 'cars');

