// 1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".



let btn = document.querySelector('.helloBtn');
btn.addEventListener('click', clickAlert);


function clickAlert(event) {
    console.log('Hello!');
}

// 2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

let image = document.querySelector(".img");
let imgUpdate = document.querySelector(".hidePhotoBtn");

 
imgUpdate.addEventListener('click', showHideUpdatePhoto);


function showHideUpdatePhoto(event) {
    image.classList.toggle('show__update-img');
};