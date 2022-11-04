// TODO _ Подсчёт количества свойств объекта
// TODO _ Напишите функцию count(obj), которая возвращает количество свойств объекта:


// let user = {
//     name: 'John',
//     age: 30,
//     "John": 500,
//     "Mary": 550
//  };
//  let count = obj => Object.keys(obj).length;



// TODO _ Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// TODO _ Если объект salaries пустой, то нужно вернуть null.

 let salaries = {
   "Pete": 2800,
    "John": 3700,
    "Mary": 1550
 };
 
let topSalary = (obj) => {
  let flag = 0;
  for (let key in obj) {
    if (obj[key] >= flag) {
      flag = obj[key];
    };
  }
  return flag;


};

console.log(topSalary(salaries));

//смог решить до этапа определения и вывода самого высокого числа


