const add_form = document.querySelector('.add_form');
add_form.addEventListener('submit', (event)=> {
    const data = [];
    event.preventDefault();
    let title = add_form.title.value;
    let price = add_form.price.value;
    let count = add_form.count.value;
    data.push({title, price, count});
    add_form.title.value = '';
    add_form.price.value = '';
    add_form.count.value = '';
    console.log(data)
})