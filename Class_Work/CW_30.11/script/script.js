// написать обработчик, который позволит выводить строку "привет" 
// при нажатии на кнопку .change_mode


const change_btn = document.querySelector('.change_mode');
const main_text = document.querySelector('.main p');
const fontSizeIncr = document.querySelector('.text_size_btns .incr')
const fontSizeDecr = document.querySelector('.text_size_btns .decr')
let fontSize;

if (localStorage.getItem('fontSize')) {
    fontSize = +localStorage.getItem('fontSize');
} else {
    localStorage.setItem('fontSize', 12);
    fontSize = 12;
}



main_text.style.fontSize = fontSize + 'px';
if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
}

change_btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
    


});

fontSizeIncr.addEventListener('click', () => {
    fontSize += 1;
    main_text.style.fontSize = fontSize + 'px';

    if (localStorage.getItem('fontSize') !== fontSize) {
        localStorage.setItem('fontSize', fontSize)
    }

});

fontSizeDecr.addEventListener('click', () => {
    fontSize -= 1;
    main_text.style.fontSize = fontSize + 'px';
    if (localStorage.getItem('fontSize') !== fontSize) {
        localStorage.setItem('fontSize', fontSize)
    }
});


//найти и применить метод у classList, позволяющий добавлять класс, если его нет и удалять если он есть

// реализовать увеличениие и уменьшение текста ".main p" на 1 при нажатии на соответствующие кнопки

//1) проверить наличие значения fontSize и localStorage и если его нет, задать 12 а есл есть считать в переменную




