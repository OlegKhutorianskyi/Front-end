const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');

let data = [
    {
        id: 1,
        title: 'Велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'Ролики',
        price: 25000
    },
    {
        id: 3,
        title: 'Самокат',
        price: 15000
    }
];


let add_card = (id, title, price) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const delete_btn = document.createElement('button');
    // добавить кнопку "Удалить"

    title_p.innerText = title;
    price_p.innerText = price;
    delete_btn.innerText = 'Удалить';
    // доработать процесс таким образом, чтобы при нажатии на кнопку в консоль выводился идентификатор 
        // товара

        delete_btn.addEventListener("click", ()=>{
            deleteProduct(id);
        });

        container.addEventListener('mousemove', () => container.style.backgroundColor = random_color());

    container.classList.add('product');
    container.append(title_p, price_p, delete_btn);
    return container


}



add_form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const title = add_form.title.value;
    const price = add_form.price.value;
    const id = Date.now();
    data.push({id, title, price});
    add_form.title.value = '';
    add_form.price.value = '';
    rerander()
    random_color()
})



let deleteProduct = id => {
    data = data.filter(product => product.id !== id); 
    rerander();
}



let rerander = () => {
    products.innerText = '';

    if (data.length === 0) {
        const info = document.createElement('p');
        info.innerText = 'Товаров нет';
        products.append(info);
    }else{
    data.forEach(({id, title, price}) => {
        const container = add_card(id, title, price);
        products.append(container);
        random_color()

    })
} 
}
rerander();

// вынести процесс создания карточки в отдельную функцию
            // функция должна получать в качестве аргументов
            // id, title, price и возвращать тег div который
            // является контейнером карточки
            
// let add_card = (id, title, price) => {
//     const container = document.createElement('div');
//     const title_p = document.createElement('p');
//     const price_p = document.createElement('p');
//     const delete_btn = document.createElement('button');
//     // добавить кнопку "Удалить"

//     title_p.innerText = title;
//     price_p.innerText = price;
//     delete_btn.innerText = 'Удалить';
//     // доработать процесс таким образом, чтобы при нажатии на кнопку в консоль выводился идентификатор 
//         // товара

//         delete_btn.addEventListener("click", ()=>{
//             console.log(id)
//         })
//     container.classList.add('product');
//     container.append(title_p, price_p, delete_btn);
//     return container
// }


function random_color() {
   const r = Math.round(Math.random() * (255));
   const g = Math.round(Math.random() * (255));
   const b = Math.round(Math.random() * (255));
    return `rgb(${r}, ${g}, ${b})`
}
container.addEventListener('dblclick', () => container.style.backgroundColor = random_color());