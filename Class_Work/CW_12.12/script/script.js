// fetch('https://jsonplaceholder.typicode.com/posts/1/')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
    
//Создать функцию, которая получает в качестве аргумента id пользователя и выводит данные о нем в консоль

const root = document.querySelector('#root')

let createElement = data => {
    const container = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');
    container.append(title, body);

    title.innerText = data.title;
    body.innerText = data.body;
    root.append(container);
}


let get_data = post_id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/`)
        .then(resp => resp.json())
        .then(data => createElement(data))
}
    

get_data(1)
get_data(2)
get_data(3)
get_data(4)
