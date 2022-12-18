

// создать функцию, которая получает в качестве аргумента
// получает название поста и добавляет в элемент #root 
// параграф с названием поста

const root = document.querySelector('#root')
const add_form = document.querySelector('.add_form')
const add_post_form = document.querySelector('.add_post_form')


const post = [];

function createPost(title, body) {
    const title_p = document.createElement('p');
    const body_p = document.createElement('p');
    const container = document.createElement('div');

    container.classList.add('post')
    title_p.classList.add('subheader')


    body_p.innerText = body;
    title_p.innerText = title;

    container.append(title_p, body_p);
    root.append(container);

}

//-------------------------
// function createPost1(title, body) {
//     const title_p = document.createElement('p');
//     const body_p = document.createElement('p');
//     const id_p = document.createElement('p');
//     const container = document.createElement('div');

//     container.classList.add('post')
//     title_p.classList.add('subheader')
//     id_p.classList.add('subheader')


//     body_p.innerText = body;
//     title_p.innerText = title;
//     id_p.innerText = id;

//     container.append(title_p, body_p, id_p);
//     root.append(container);

// }

//---------------------------------------------------

add_form.addEventListener('submit', event => {
    event.preventDefault();
    const id = event.target.id.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/1${id}`)
    .then(resp => resp.json())
    .then(({title, body}) => createPost(title, body));


    event.target.id.value = '';
});

//--------------------

add_post_form.addEventListener('submit', event => {
    event.preventDefault();
    const {title, body, user_id} = event.target;
    add_post(body.value, title.value, user_id.value);

    user_id.value = '';
    title.value = '';
    body.value = '';

});


const add_post = (body, title, user_id) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title,
    body,
    user_id
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => createPost(title, body));

}




//-----------------------------------------------------------

// получив данные с сервера добавьте их в массив posts 
// и вызовите rerender, предварительно создав его








  // создать функцию, которая получает в качестве аргументов title, body, user_id 
// и отправляет эти данные на сервер для добавления нового поста



// добавить элементу div (контейнер для поста) класс post








// доработать функцию createPost таким образом, чтобы функция
// получала два аргумента (заголовок и текст поста)
// и формировала следующую верстку

/*
<div>
    <p>Заголовок</p>
    <p>Текст</p>
</div>
*/


// используя функцию createPost отображайте данные, пришедшие с сервера, 
// в интерфейсе


// доработайте процесс таким образом, чтобы при отправке формы в интерфейс 
// добавлялся пост с указанным id


// добавить параграфу с заголовком класс subheader и увеличить у него размер текста до 30 px



