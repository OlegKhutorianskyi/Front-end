// const arr = {
//     data: [12, 4, 32, 5, 43]
// } 

// localStorage.setItem('test_item', JSON.stringify(arr))
// console.log(JSON.parse(localStorage.getItem('test_item')))

// реализовать процесс в js, который при отправке формы выводит 
//     содержимое поля ввода в консоль
// let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
let write_local = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))
let read_local = () => JSON.parse(localStorage.getItem('tasks')) ?? [];

let tasks = read_local();

const addTask = document.querySelector('.add_task');
const tasks_container = document.querySelector('.tasks');

addTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    console.log(task);
    tasks.push({id: Date.now(), task})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    event.target.task.value = '';
    rerender()
});

// написать функцию rerender которая
// 1) очищает содержимое ".tasks" 
// 2) выводит параграфы с текстом задачи в элемент ".tasks"

let rerender = () => {
    tasks_container.innerText = '';
    
    if(read_local().length === 0){
        const p_elem = document.createElement('p');
        p_elem.innerText = 'Никаких дел нет!';
        tasks_container.append(p_elem);
    }else{
    read_local().forEach(item => {
    const p_elem = document.createElement('p');
    p_elem.innerText = item.task;
    tasks_container.append(p_elem);
    })
    }
};

rerender();
// write_local - получает в качестве аргумента массив и записывает
// его в localStorage под ключем tasks

// read_local - не получает аргументов и возвращает из localStorage
// значение, преобразованное в массив


// доработать js таким образом, что бы указанное значение
// добавлялось в массив в localStorage






// let text = localStorage.getItem('addTask')
// let textVal = addTask.value;
// if (addTask) {
//     arr.push(addTask.value)
// }
// textArea.oninput = () => {
//     localStorage.setItem('textArea', textArea.value);

// }


