//todo__ Напишите следующую функцию, которая принимает некий массив данных.

//* если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве

//* если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

//* во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

//todo --- мой способ:
// let indexArr_0 = arr.indexOf(arr[0]);
// let indexArr_1 = arr.indexOf(arr[1]);
// let indexArr_2 = arr.indexOf(arr[2]);
// let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//       if (arr[0].length > arr[1].length && arr[0].length > arr[2].length) {
//         res.push(arr[0]);
//         res.push(indexArr_0);
//       } else if (
//         arr[1].length > arr[0].length &&
//         arr[1].length > arr[2].length
//       ) {
//         res.push(arr[1]);
//         res.push(indexArr_1);
//       } else if (
//         arr[2].length > arr[0].length &&
//         arr[2].length > arr[1].length
//       ) {
//         res.push(arr[2]);
//         res.push(indexArr_2);
//       }

//       return res;
//     } else if (typeof arr[i] == "number") {
//       if (arr[0] > arr[1] && arr[0] > arr[2]) {
//         res.push(arr[0]);
//         res.push(indexArr_0);
//       } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
//         res.push(arr[1]);
//         res.push(indexArr_1);
//       } else if (arr[2] > arr[1] && arr[2] > arr[0]) {
//         res.push(arr[2]);
//         res.push(indexArr_2);
//       }
//       return res;
//     } else {
//       res.push("неверный тип данных в массиве", arr.length);
//       return res;
//     }
//   }

//   return arr;
// };
// console.log(longStrInArray([1, 2, 3]));

//todo --- способ короткого решения который разбирали на занятии:

let longStrInArray = (arr) => {
  if (cheсkTypeInArray(arr, "string")) {
    return maxStringInArray(arr);
  }
  if (cheсkTypeInArray(arr, "number")) {
    return maxNumberInArray(arr);
  }
  return ["Не верный тип данных массива", arr.length];
};
console.log(longStrInArray([1, 2, 3]));

function cheсkTypeInArray(array, type) {
  let flag = true;
  array.forEach((element) => {
    if (typeof element !== type) {
      flag = false;
    }
  });
  return flag;
}
function maxStringInArray(array) {
  let stringItem = "";
  let stringIndex = 0;
  array.forEach((item, index) => {
    if (item.length > stringItem.length) {
      stringItem = item;
      stringIndex = index;
    }
  });
  return [stringItem, stringIndex];
}

function maxNumberInArray(array) {
  let numberItem = 0;
  let numberIndex = 0;
  array.forEach((item, index) => {
    if (item > numberItem) {
      numberItem = item;
      numberIndex = index;
    }
  });
  return [numberItem, numberIndex];
}

// todo _ Напишите функцию которая будет принимать три массива с любыми данными и объединять их в один, новый массив и возвращать его. В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте только строки, затем цифры, затем булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее.

// let one = ["привет", true, 65];
// let two = [3, [], false];
// let three = ["js", "java", "script", "redButton"];

// function resultFilter(arr1, arr2, arr3) {
//   let toHardThreeOrder = [].concat(one, two, three);

//   let a = toHardThreeOrder.filter((n) => {
//     return typeof n == "string";
//   });

//   let b = toHardThreeOrder.filter((n) => {
//     return typeof n == "number";
//   });

//   let c = toHardThreeOrder.filter((n) => {
//     return typeof n == "boolean";
//   });

//   let d = toHardThreeOrder.filter((n) => {
//     return (
//       typeof n !== "boolean" && typeof n !== "number" && typeof n !== "string"
//     );
//   });

//   return [...a, ...b, ...c, ...d];
// }

// console.log(resultFilter(one, two, three));
