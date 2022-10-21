// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'


// let array = ['a', 'b', 'c', 'd'];

// let con = `${array[0]}+${array[1]}, ${array[2]}+${array[3]}`;

// let con1 = "" + array[0] + "+" + array[1] + ", " + array[2] + "+" + array[3];

// console.log(con);

// let multipledThree = num => num % 3 == 0;
// let even = num => num % 2 == 0;

// let arrayToStringConcat = arr => {
//     let str = "";
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (multipledThree(i + 1)) {
//            str += `, ${element}`;
//         }else{
//             str += element;
//         }
//     }
    


//     return str;
// }


// console.log(even(3));
// console.log(multipledThree(2));

// console.log(arrayToStringConcat(['a', 'b', 'c', 'd', 'e', 'f','g','i']));


// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.


function formatDate(str) {
    let stringDateArray = str.split("-"); // преобразовала в массив по разделетилю в -
    stringDateArray.reverse(); //развернула массив
    let stringDateUpdate = stringDateArray.join("/"); // объединила массив в сторку через /
    return str
       .split("-")
       .reverse()
       .join("/"); //цепочка методов // точка позволяет переносить строку кода // не нужны двже круглые скобки в цепочке методов
 
    return stringDateUpdate; // вернули
 }
 console.log(formatDate("2022-10-19")); 
 // let formatDate = str => str.split("-").reverse().join("/");
 // console.log(formatDate("2022-10-19"));

 

//  Дана переменная str, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, 
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
// В противном случае в переменную result запишем содержимое переменной str.


let shortingString = function (string, max) {
    if (string.length <= max) {
      return string;
    }
    return string.slice(0, max) + "...";
    
  };
  console.log(shortingString("hello world", 20));

  

  
