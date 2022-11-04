// const book = {
//     author: "Пушкин",
//     name: 'Капитанская дочка',
//     count: '500'
// }

// console.log(`
// Автор: ${book.author}
// Название книги: ${book.name}
// Колличество страниц: ${book.count}
// `);

const books = [
  {
    author: "Пушкин",
    name: "Капитанская дочка",
    count: "500",
  },
  {
    author: "Толстой",
    name: "Война и мир",
    count: "1000",
  },
  {
    author: "Достоевский",
    name: "Приступление и наказание",
    count: "700",
  },
];

const newAutor = prompt("Введите автора книги");
const newName = prompt("Введите название книги");
const newCount = prompt("Введите колличество страниц книги");

const newBook = {
    author: newAutor,
    name: newName,
    count: newCount
};


const newBooks = books.concat(newBook)


for (let i = 0; i < newBooks.length; i++) {
  console.log(` 
    <div class="book"
        <p>Автор: ${newBooks[i].author} </p>
        <p>Название книги: ${newBooks[i].name}</p>
        <p>Колличество страниц: ${newBooks[i].count}</p>
    </div>
    `);
};

const logBooks = (book) => console.log(book.author, book.name, book.count)

newBooks.map(book => {
    console.log(`
    <div class="book">
        <p>${book.author}</p>
        <p>${book.name}</p>
        <p>${book.count}</p>
    </div> 
    `)
})