const todos = [
  {
    id: 1,
    title: "побегать",
    dttm: "строка с датой",
    done_flg: true,
  },
  {
    id: 2,
    title: "поесть",
    dttm: "строка с датой",
    done_flg: false,
  },
];
const add_todo = document.querySelector(".add_todo");

// написать процесс, который при отправке формы выводит ее содержимое в console

add_todo.addEventListener("submit", (e) => {
  e.preventDefault();
  const { title } = e.target;
  const new_todo = {
    id: Date.now(),
    title: title.value,
    dttm: new Date().toLocaleString(),
    done_flg: false,
  };

  todos.push(new_todo);
  rerender();
  title.value = "";
});

// данная функция должна очистить div с классом todo_container
// пройтись циклом по todos и для каждого объекта добавить карточку со следующей структурой

/*
    <div>
        <p>title</p>
        <p>dttm</p>
    </div> 
    */

// каждую карточку добавить в div с классом todo_container

const rerender = () => {
  const todo_container = document.querySelector(".todo_container");

  const count_container = document.querySelector('.count_container')
  todo_container.innerText = "";

    // добавить подсчет колличества сделаных и не сделаных дел
    // значения вывести в консоль

    //Черер reduce:

    // const don_cnt = todos.reduce((prev, item)=>prev + (item.done_flg ? 1 : 0), 0)
    // const not_don_cnt = todos.length - don_cnt;

    //Через filter:

    const don_cnt = todos.filter((item) => item.done_flg).length;
    const not_don_cnt = todos.filter((item) => !item.done_flg).length;

    count_container.innerText = `done = ${don_cnt}; not done = ${not_don_cnt}`;


  todos.forEach((todo) => {
    const container = document.createElement("div");
    const title_p = document.createElement("p");
    const dttm_p = document.createElement("p");
    const info = document.createElement("div");
    const change_state = document.createElement("button");

    // написать обработчик нажатия на кнопку
    // при нажатии в консоль должен выводиться id

    change_state.addEventListener("click", () => {
      //вариант 1
      //   const target = todos.find(item => item.id === todo.id);
      //   target.done_flg = !target.done_flg;

      //вариант 2
      todo.done_flg = !todo.done_flg;
      rerender();
    });

    title_p.innerText = todo.title;
    dttm_p.innerText = todo.dttm;
    change_state.innerText = todo.done_flg ? "Сделано" : "Сделать";

    //вариант с тернарным оператором:

    change_state.style.backgroundColor = todo.done_flg ? '#235465' : '#e74c3c';


    //вариант с условным оператором:


    // if (todos.done_flg) {
    //     change_state.style.backgroundColor = ;
    // } else{
    //     change_state.style.backgroundColor = '#338465';

    // }

    container.classList.add("item");

    if (todo.done_flg) {
      container.classList.add("done");
    }

    info.append(title_p, dttm_p);
    container.append(info, change_state);

    todo_container.append(container);
  });
};

rerender();
// 1) добавить класс item для карточек
// 2) стилизовать карточки по картинке
// 2.1) добавить кнопку
