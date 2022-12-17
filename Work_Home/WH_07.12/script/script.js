
const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');
const allSumm = document.querySelector('.allSumm');
const allAmount = document.querySelector('.allAmount');

let data = [];




let add_card = (title, price, amount) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const amount_p = document.createElement('p');
    title_p.innerText = title;
    price_p.innerText = price;
    amount_p.innerText = amount;



    container.classList.add('product');
    container.append(title_p, price_p, amount_p);
    return container


}



add_form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const title = add_form.title.value;
    const price = +add_form.price.value;
    const amount = +add_form.amount.value
    const id = Date.now();

    data.push({id, title, price, amount});
    add_form.title.value = '';
    add_form.price.value = '';
    add_form.amount.value = '';
    

      addToLocalStorage(id, title, price, amount)


    rerander()


})




const addToLocalStorage = (id, title, price, amount) => {
  const products = getLocalStorage()
  const newProduct = { id, title, price, amount } 
  products.push(newProduct)
  localStorage.setItem('products', JSON.stringify(products))
}

const getLocalStorage = () => {
  return localStorage.getItem("products") 
  
  ? JSON.parse(localStorage.getItem("products"))
  : []  
}



let rerander = () => {
    products.innerText = '';
      
    if (data.length === 0) {
      const info = document.createElement("p");
      info.innerText = "Товаров нет";
      products.append(info);
    } else {
      getLocalStorage()
      data.forEach(({ title, price, amount }) => {
        let amountCalc = `${price} X ${amount} = ${price * amount}`;
        const container = add_card(title, price, amountCalc);
        products.append(container);
        
      });
    } 

    const total_sum = data.reduce((prev, item) => {
      return prev + item.price * item.amount;
    }, 0);
    const total_amount = data.reduce((prev, item) => {
      return prev + item.amount;
    }, 0);

    
    const total_summ_elem = document.querySelector('.order_info .total_summ');
    const total_amount_elem = document.querySelector('.order_info .total_amount');

    total_summ_elem.innerText = total_sum
    total_amount_elem.innerText = total_amount
}
rerander();
// В локалСторож записывает но при обновлении исчезает