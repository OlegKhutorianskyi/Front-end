// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом
const data = { a: 1 };
// console.log(isPlainObject(data)); // true


let isPlainObject = (data) => typeof data === 'object' && !Array.isArray(data) && data !== null;
console.log(isPlainObject(null));

// Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`


// let makeArrayFromObject = obj => {
//     let arrBox = [];
//     for (const key in obj) {
//         arrBox.push([key, obj[key]]);
        
//     }
//     return arrBox;
// }

// console.log(makeArrayFromObject({ a: 1, b: 2 }));

// { a: 1, b: 2 }
// ({ a: 1, b: 2 }, 'b') => { a: 1 }
//deletedProps - это сколько угодно ключей которые нужно удалить из объекта 


let without = (obj, ...deletedProps) => {
    let newObject = {};

    for (const key in obj) {
        if (key !== deletedProps) {
            newObject[key] = obj[key];
        }
        deletedProps.forEach(element => {
            if (key !== element) {
                newObject[key] = obj[key];
            }   
        });
    }
    return newObject;
};

console.log(without({a: 1, b: 2}, 'b'));