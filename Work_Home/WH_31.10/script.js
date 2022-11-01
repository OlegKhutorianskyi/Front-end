// TODO _ Подсчёт количества свойств объекта
// TODO _ Напишите функцию count(obj), которая возвращает количество свойств объекта:


let user = {
    name: 'John',
    age: 30,
    "John": 500,
    "Mary": 550


 };
 let count = obj => {let objLenth = Object.keys(obj).length; return objLenth;}
 console.log(count(user));



// TODO _ Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// TODO _ Если объект salaries пустой, то нужно вернуть null.

 let salaries = {
    "John": 500,
    "Pete": 300,
    "Mary": 550
 };
 
let topSalary = (obj) => {
  if (obj.John > obj.Pete && obj.John > obj.Mary) {
    obj.name = "John";
    return obj.name;
  } else if (obj.Pete > obj.John && obj.Pete > obj.Mary) {
    obj.name = "Pete";
    return obj.name;
  } else if (obj.Mary > obj.John && obj.Mary > obj.Pete) {
    obj.name = "Mary";
    return obj.name;
  } else {
    return null;
  }
};

console.log(topSalary(salaries));