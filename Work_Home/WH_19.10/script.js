//todo__ Напишите следующую функцию, которая принимает некий массив данных. 



//* если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве 

//* если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

//* во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.




let longStrInArray = arr => {
    let indexArr_0 = arr.indexOf(arr[0]);
    let indexArr_1 = arr.indexOf(arr[1]);
    let indexArr_2 = arr.indexOf(arr[2]);
    let res = [];
    for (let i = 0; i < arr.length; i++) {  
    
    if (typeof arr[i] == "string") {
        
    if (arr[0].length > arr[1].length && arr[0].length > arr[2].length) {
        res.push(arr[0]);
        res.push(indexArr_0);
        return res;
    }else if(arr[1].length > arr[0].length && arr[1].length > arr[2].length){
        res.push(arr[1]);
        res.push(indexArr_1);
        return res;
    }else if(arr[2].length > arr[0].length && arr[2].length > arr[1].length){
        res.push(arr[2]);
        res.push(indexArr_2);
        return res;

    }
    
    return res;
}
else if(typeof arr[i] == "number"){
    if (arr[0] > arr[1] && arr[0] > arr[2]) {
        res.push(arr[0]);
        res.push(indexArr_0);
        return res;
    }else if (arr[1] > arr[0] && arr[1] > arr[2]) {
        res.push(arr[1]);
        res.push(indexArr_1);
        return res;
    }else if (arr[2] > arr[1] && arr[2] > arr[0]) {
        res.push(arr[2]);
        res.push(indexArr_2);
        return res;
    }
    return res;
}else{
    res.push('неверный тип данных в массиве', arr.length);
    return res;
}
    }

arr = res;    
return arr;

};
console.log(longStrInArray(['glory', 'to', 'ukraine']));


