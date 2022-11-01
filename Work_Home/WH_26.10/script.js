//TASK 1

// let arr1 = [5, 3, 8, 1];
// console.log(arr1);
// let arr2 = [...arr1];
// arr2.filter(
//  filterRange = (arr, a, b) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (a <= element && b >= element) {
//       arr.splice(i, 1);
//       i--;
//     };
//   }
//   return arr;
// });

// console.log(filterRange(arr2, 2, 7));

//TASK 2

let arr1 = [5, 3, 8, 1];
console.log(arr1);

let filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (a <= element && b <= element) {
      arr.splice(i, 1);
      i--;
    }
  }
};
filterRangeInPlace(arr1, 2, 7)
console.log(arr1);