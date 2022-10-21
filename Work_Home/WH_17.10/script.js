// 1)   Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».


// let camelize = str => str.split("-").join("").replaceAll("s", "S");
// console.log(camelize("my-short-string"));

//знаю что костыль, хотелось бы разобрать для более динамического использоавния этой функции
//-------------------------------------


let arr = [1, -2, 3, 4, -9, 6];

let arrMapping = arr => arr.map(
	function(items) {
		if (arr[0,2,3,5] > 0){

			let plus = arr[0] + arr[2] + arr[3] + arr[5];
            return plus;
		}
		return items
	}
);

console.log(arrMapping(arr));
 
//-----------------------------------
//не смог нормально решить эту функцию, хотелось бы её разобрать подробнее