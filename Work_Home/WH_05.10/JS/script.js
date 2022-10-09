//first Level
const i = 5;
const s = '5';
console.log(s == i);
console.log(i === s);

//second Level
const sum = 100;
const tomate = 10;
const gurken = 5;
const apple = 15;
let purchases = (tomate + gurken + apple)* 2; 
let resNuts = sum - purchases;
console.log(resNuts);
if (purchases < resNuts) {
    console.log('Больше потратили на фрукты и овощи');
} else {
    console.log('Больше потратили на орехи')
}