// 1)
// Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать - 
 // Какой-то текст! - input 



let lockedBtn = document.querySelector('.Locked');
let UnlockedBtn = document.querySelector('.Unlocked');
let importantInput = document.querySelector('.pasiveActiveInput');

lockedBtn.addEventListener('click', toggleDisabled);

function toggleDisabled(event){
    importantInput.setAttribute('disabled', true);
}
UnlockedBtn.addEventListener('click', toggleUnabled);

function toggleUnabled(event) {
    importantInput.removeAttribute('disabled');
}


// 2)
// Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent

// Заголовок, не поменяется.

// Абзац, поменяется.
 
// Абзац, поменяется.
 
// Абзац, поменяется.

let listItem = document.querySelectorAll('.list p');
listItem.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        if (event.target.dataset.number) {
            listItem.textContent = dataset.number;
        }
    });
});
