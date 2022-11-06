// Напишите функцию, которая поверхностно сравнивает два объекта.



// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true


// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false





// const data = { a: 1, b: 1 };
// const data1 = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };

// let isEqual = (obj, obj1) => {

//   let objEntries = Object.entries(obj);
//   let obj1Entries = Object.entries(obj1);
//   if (objEntries.length !== obj1Entries.length) {
//     return false;
//   }
//   for (let i = 0; i < objEntries.length; i++) {
//     if (objEntries[i][0] !== obj1Entries[i][0]) {
//       return false;
//     }
//     if (objEntries[i][1] !== obj1Entries[i][1]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isEqual(data2, data1));



// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.


const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }

let intersection = (obj, obj1) => {
  let objEntries = Object.entries(obj);
  let obj1Entries = Object.entries(obj1);
  let result = {};
  for (let i = 0; i < objEntries.length; i++) {
        if (objEntries[i][0] == obj1Entries[i][0]) {
          result = objEntries[i];
            
        }
        // if (objEntries[i][1] == obj1Entries[i][1]) {
        //     result[objEntries[0]] = obj1Entries[1]
        // }
      }


    //   for (const key in obj) {
    //     if (obj[key] == obj1[key]) {
    //         const element = obj[key];
            
    //     }
    //   }
      return result;
    };

console.log(intersection(data, data2));