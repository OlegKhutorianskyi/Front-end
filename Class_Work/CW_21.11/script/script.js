// const elem = document.querySelector('p');
// const elem_list = document.querySelectorAll('p');

// const text_list = [...elem_list].map(elem => elem.innerText);
// console.log(text_list);

// console.log([...elem_list])

// const main_elemm = document.getElementById('main');
// const p_list = document.getElementsByTagName('p');

// console.log(main_elemm);
// console.log(p_list);




// вывести в консоль текст из параграфа, который находится в 
// div с классом main
// const main = document.querySelector('.main p');

// console.log(main.innerText);

// вывести параграф с классом info из div с идентификатором main

// const main = document.querySelector('#main .info');
// console.log(main.innerText);

// найти параграф с классом main, который находится в div, который находится в div с идентификатором info

// const main = document.querySelector('#info div .main');
// console.log(main.innerText);


const root_elem = document.querySelector('#root');

const products = [
    {
        title: 'велосипед',
        price: 45000,
        count: 5,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'
    },
    {
        title: 'самокат',
        price: 25000,
        count: 4,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'
    },
    {
        title: 'лыжи',
        price: 30000,
        count: 0,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'

    }
];

products.forEach( ({title, price, count, link, img}) => {

    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const count_p = document.createElement('p');
    const link_a = document.createElement('a');
    const img_a = document.createElement('img');
    container.append(img_a, title_p, price_p, count_p, link_a);
    root_elem.append(container);

    container.classList.add('product');

    title_p.innerText = title;
    price_p.innerText = price; 
    count_p.innerText = count === 0 ? 'Товар закончился' : count;
    link_a.href = link;
    link_a.target = '_blank';
    link_a.innerText = 'подробнее...';
    img_a.src = img;
});

console.log(root_elem);


// добавить в каждый объект свойство count с каким-либо числом и
// выводить кол-во продуктов отдельный параграфом


/*
    <div>
        <p>Название</p>
        <p>Цена</p>
        <p>Кол-во</p>
    </div>
*/

// в случае, если кол-во товара равно нулю выведите фразу "Товар закончился"
