function write_local(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function read_local(){
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
}


const form = document.querySelector('.add_task');
const tasks_container = document.querySelector('.tasks');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    
    write_local([...read_local(), {id: Date.now(), task}]);

    event.target.task.value = '';
    rerender()
});


/* <div>
    <p>наименование</p>
    <button>Удалить</button>
</div> */


function createCard(title, id){
    const card = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    btn.addEventListener('click', () => delete_task(id))

    card.append(p, btn)
    p.innerText = title;
    btn.innerText = 'Удалить';
    return card
}

// создать функцию, которая удаляет дело из карточки
// функция получает id карточки в качестве аргумента

// 1) используя метод filter формируем новый массив
// со значениями, у которых id не равен переданному

// 2) вызываем write_local и передаем массив из 1 пункта

// 3) вызвать rerender


function delete_task(id) {
    const new_arr = read_local().filter((item) => item.id !== id)
            write_local(new_arr);
            rerender(); 
}




// доработать процесс таким образом, чтобы при нажатии на кнопку "Удалить"
// в консоль выводилась строка "Удалить"


function rerender(){
    tasks_container.innerText = '';

    if (read_local().length === 0){
        const p_elem = document.createElement('p');
        p_elem.innerText = 'Никаких дел нет!';
        tasks_container.append(p_elem);
    }else{
        read_local().forEach(({task, id}) => {
            const new_card = createCard(task, id);
            tasks_container.append(new_card);
        })
    }
}

rerender()



// вынести процесс создания карточки с делом в функцию createCard

// данная функция получает в качестве аргумента название дела и возвращает
// параграф с названием дела внутри

// createCard('выучить гриды') -> <p>выучить гриды</p>


