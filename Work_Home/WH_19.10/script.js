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


