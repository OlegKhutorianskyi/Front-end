// const btn_elem = document.querySelector('.btn');
// const p_elem = document.querySelector('.text');

// const handler = ()=>console.log('привет');

// btn_elem.addEventListener('click', handler);
// p_elem.addEventListener('click', random_int());


// function random_color(params) {
//     //создать функцию которая ворзвращает случайный цвет
//    const r = Math.floor(Math.random() * (255));
//    const g = Math.floor(Math.random() * (255));
//    const b = Math.floor(Math.random() * (255));
//     return `rgb(${r}, ${g}, ${b})`
// }
// btn_elem.addEventListener('click', () => btn_elem.style.backgroundColor = random_color());

// создать программу, которая имитирует работу игральных костей
// при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6
// function random_int(params) {
//  return Math.ceil(Math.random() * 6);

// };

// btn_elem.addEventListener('click', ()=>{
//     p_elem.innerText = `${random_int()} ${random_int()}`
// })




const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');

const data = [];
add_form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const title = add_form.title.value;
    const price = add_form.price.value;
    add_form.title.value = '';
    add_form.price.value = '';
    title.document.createElement('div');
    price.document.createElement('div');
    data.push({title, price});
    rerander()
});

let rerander = () => {
    products.innerText = '';
    data.forEach(({title, price}) => {
        const container = document.createElement('div');
        const title_p  = document.createElement('p');
        const price_p  = document.createElement('p');
        title_p.innnerText = title;
        price_p.innnerText = price;

        container.append(title_p, price_p);
        products.append(container);
    })
}
// создать функцию, которая для каждого элемента массива data
// создает div с названием и ценой товара и добавляет в 
// div с классом products

/*
<div>
    <p>Название товара</p>
    <p>Цена</p>
</div>
*/
