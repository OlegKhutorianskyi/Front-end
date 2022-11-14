// 1) написать скрипт, который получает через prompt число и выводит в консоль
// его квадрат
// let num = prompt("Please enter your number: ");
// console.log(num ** 2);

// let num1 = +prompt("Please enter number one: ");
// let num2 = +prompt("Please enter number two: ");
//  if (num1 > num2) {
//     console.log(num1);
//  }
//  console.log(num2);
 
// 3) напишите функцию, которая принимает аргумент (число) и 
// возвращает true, если число четное и false в ином случае

// let number = num => num %2 == 0;

// console.log(number(12));

// 4) написать скрипт, который формирует массив из цифр от 0 до 9.
// массив вывести в консоль

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(i);
// }

// console.log(array);

// 5) написать цикл, который проходится по массиву numbers 
// и находит сумму четных чисел
// результат необходимо вывести в консоль


// const numbers = [12, 4, 3, 34, 3, 1, 5, 34];
// let even_sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] %2 == 0) {
//     even_sum += numbers[i];
//   }
// };
// console.log(even_sum)

// const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27];
// arr.forEach((elem, index, arr) => console.log(elem, index, arr));

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
        
//     }
// }

// forEach(arr, (elem, index, arr) => console.log(elem, index,arr));


// const result = arr.map(elem => elem ** 2);
// console.log(result);

// вызвать метод map и все отрицательные числа
// преобразовать в положительные

// const result = arr.map(elem => elem > 0 ? elem: -elem)
// .forEach(elem => console.log(elem));
// console.log(result);

// const result = arr.filter(elem => elem > 0);
// console.log(result);

// используя метод filter сформируйте массив, состоящий только
// из чисел от -10 до 10

// const result = arr.filter(elem => 
//     elem >= -10 && elem <= 10 );
// console.log(result);

// const arr = ['велосипед', 'самокаты', 'коньки', 'лыжи'];
// const result = arr.find(elem => 
//         elem < 0);
//     console.log(result);
// вызвать метод find, который возрващает первое слово, которое короче 7 символов

// const result = arr.find(elem => 
//     elem.length < 7 );
// console.log(result);

// const user = {
//     name: 'Anatoli',
//     lastname: 'Ushanov',
//     age: 29
// };

// console.log(user.name);
// console.log(user.age);


const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'самокат',
        price: 15000
    },
    {
        id: 3,
        title: 'лыжи',
        price: 25000
    },
    {
        id: 4,
        title: 'скейт',
        price: 13000
    },
    {
        id: 5,
        title: 'коньки',
        price: 7000
    }
];

products.forEach(product => console.log(product.title));
// вызвать метод массива, который сформирует новый массив с 
// товарами, дешевле 20 тысяч

// const result = products.filter(product => product.price < 20000);
// console.log(result);

// вызвать метод массива и сформировать новый массив, который состоит из 
// объектов со свойствами title, price;


const result = products.map(product => (
    {
        title: product.title,
        price: product.price
    }
)
    );
console.log(result);