const cars = [
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 },
    { mark : "BMW", model : "M3", year : "2002", price : 18000 },
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 },
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 },
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 },
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 },
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 },
]


// 1. Вернуть массив с маркой и моделью машины. ["Mercedes-Benz S600", "BMW M3"]
// 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет 
// объединенная строка `Марка Модель` и все остальные свойства 
// [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 },
//   { markModel : "BMW M3", year : "2002", price : 18000 }   ]
// const result = cars.map(car => car.mark + " " + car.model)
// const result = cars.map(car => `${mark} ${car.model}`)
// const result = cars.map(({mark, model, ...car}) => ({
//     ...car,
//     markModel: `${mark} ${model}`
// }) );

// console.log(result)

// Задача2. Посчитать среднюю цену всех автомобилей
// средняя цена = сумма всех цен / количество автомобилей


// const result = cars.reduce((sum, car) => sum + car.price, 0) / cars.length;

// console.log(Math.round(result))

// Задача 3. Вернуть массив машин, которым меньше 20 лет.

// let result = cars.filter(({year}) => year > new Date().getFullYear() - 20);
// const date = new Date("2005")
// console.log(result)

// const users = [
//     { name : "Arsen", bDay : "03/03/1998"},
//     { name : "Ivan", bDay : "10/25/1990" },
//     { name : "Alex", bDay : "07/05/1995" },
//     { name : "Kostya", bDay : "02/12/2005" },
//     { name : "Max", bDay : "05/07/2001" },
//     { name : "Ann", bDay : "01/15/2002" },
//     { name : "Julia", bDay : "09/13/2003" },
//     { name : "Oksana", bDay : "10/25/2001" },
// ]

// let result = users.filter(({bDay}) => new Date().getUTCFullYear() - new Date(bDay).getFullYear() > 20);
// console.log(result)

// const sortName = ['Max', "Arsen", "Julia", "Andrey"];
// const sortedNames = names.sort()


// const nums = [1, 20, 5, 15, 32];

// const sortedNums = nums.sort()
// console.log(sortedNums)


const result = cars.sort((a, b) => a.price - b.price);

    console.log(result)