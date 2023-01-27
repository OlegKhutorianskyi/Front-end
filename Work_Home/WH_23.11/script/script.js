// const add_form = document.querySelector('.add_form');
// add_form.addEventListener('submit', (event)=> {
//     const data = [];
//     event.preventDefault();
//     let title = add_form.title.value;
//     let price = add_form.price.value;
//     let count = add_form.count.value;
//     data.push({title, price, count});
//     add_form.title.value = '';
//     add_form.price.value = '';
//     add_form.count.value = '';
//     console.log(data)
// })

const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');

let data = [
    {
        id: 1,
        title: 'Велосипед',
        price: 45000,
        amount: 5
    },
    {
        id: 2,
        title: 'Ролики',
        price: 25000,
        amount: 8
    },
    {
        id: 3,
        title: 'Самокат',
        price: 15000,
        amount: 10
    }
];


let add_card = (id, title, price, amount) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const amount_p = document.createElement('p');
    const delete_btn = document.createElement('button');
    title_p.innerText = title;
    price_p.innerText = price;
    amount_p.innerText = amount;
    // delete_btn.innerText = 'Удалить';

        // delete_btn.addEventListener("click", ()=>{
        //     deleteProduct(id);
        // });
 



    

    container.classList.add('product');
    container.append(title_p, price_p, amount_p);
    return container


}



add_form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const title = add_form.title.value;
    const price = add_form.price.value;
    const amount = add_form.amount.value
    const id = Date.now();
    data.push({id, title, price, amount});
    add_form.title.value = '';
    add_form.price.value = '';
    add_form.amount.value = '';
    rerander()
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
    data.forEach(({id, title, price, amount}) => {
    let amountCalc = `${price} X ${amount} = ${price * amount}`;
    const container = add_card(id, title, price, amountCalc);
        products.append(container);
    })
} 
rerander();
}

// Написать счетчики общей стоимости и колличества как на макете