// const number = [12, 4, 3 ,62, 55, 4];
//написать скрипт, который формирует массив из только четных чисел

// const results = number.filter(arr => arr %2 === 0);
// console.log(results);

//используя reduce найти сумму чисел массива

// const results = number.reduce((prev, item) => prev + item);
// console.log(results);

//используя reduce найти сумму четных чисел

// const results = number.reduce(
//     (prev, item) => prev + ((item % 2 === 0) ? item : 0),
//     0
// );
// console.log(results);

//Исппользуя reduce найти наибольшее число в массиве и вывести его
// const results = number.reduce(
//     (prev, item) => ((prev < item) ? item: prev)
// );
// console.log(results);


// function reduce(array, callback, initial){
//     let last_call = initial;
//     for (let i = 0; i < array.length; i++) {
//         last_call = callback(last_call, array[i])
//     }
//     return last_call
// }


const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3,
        marks: [4, 3, 5, 3]   
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]   
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000,
        count: 2,
        marks: [3, 5, 3]   
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 25000,
        count: 0,
        marks: [4, 3, 5]   
    },
    {
        id: 5,
        title: 'лижи',
        price: 35000,
        count: 1,
        marks: [4]   
    }
];

//используя методы массивов создайте массив из названий товаров

// const titles = products.map(({title}) => title);
// console.log(titles);

// написать скрипт, который формирует массив из объектов с товарами которые дороже 26000

// const result = products.filter(({price}) => price < 26000);

// console.log(result);
//найти общую сумму товаров используя методы массивов
// const result = products.reduce((prev, product) => prev + product.price, 0);
//если вместо 0 указать 100 000 - исчиссление указанных значений начнутся из 100 000;
// console.log(result);


//используя методы массивов найти самый дорогой товар
// const result = products.reduce(
//     (prev, item) => prev.price > item.price ? prev: item);
// console.log(result);

//написать процесс, который позволит сформировать массив из объектов с названием, ценой и средней оценкой

// const result = products.map(({id, title, marks, price}) => ({ /*взяли в круглые скобки чтобы указать что это не тело функции а объект */
/*фигурные скобки в аргументах функции означает что в качестве аргументов получаем значения объекта(диструктуризация объекта) */
    // id,
    // title,
    // price,
    // avg_mark: marks.reduce((a, b) => a + b) / marks.length /* : находим срееднее арифметическое и присваеваем свойству нового объекта*/
    //     }));
    // console.log(result);

    // const result = products.map(({marks, ...product}) => ({  /*сокращение через sprat - оператор*/
    //     ...product,
    //     avg_mark: marks.reduce((a, b) => a + b) / marks.length
    // }))
    

    //исполльзуя методы массивов найти общую стоимость всех товаров
    // если нужно вывести весь массив объектов включая новые ключии с исчисляемым значением используем метод "мар":
//     const result = products.map(({price, count, ...product}) => ({
//     ...product,
//     count,
//     price,
//     all_price: count * price
// }));
// console.log(result);
//только требуемое задачей значение:
const result = products.reduce((prev, {price, count}) => prev + price * count, 0);
console.log(result);