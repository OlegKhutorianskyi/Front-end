const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector(".products-wrapper")
const notification = document.querySelector(".notification")



const addProduct = (e) => {
    e.preventDefault()
    const currProduct = productName.value
    const id = new Date().getTime().toString()
    console.log(id)


    if (currProduct) {
        const element = document.createElement("div")
        element.setAttribute("id", id)
        element.classList.add("product")
        element.innerHTML = `
            <h5 class="product-name">${currProduct}</h5>
            <div class="product-actions">
                <button class="delete-btn">Удалить</button>
                <button class="edit-btn">Редактировать</button>
            </div>
        `

        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteProduct)

        productsWrapper.appendChild(element)

        //добавить в ЛокалСторейдж
        addToLocalStorage(id, currProduct)

        showNotification()

        resetOptions()
    
    }
}

const createProducts = (id, name) => {
    const element = document.createElement("div")
        element.setAttribute("id", id)
        element.classList.add("product")
        element.innerHTML = `
            <h5 class="product-name">${currProduct}</h5>
            <div class="product-actions">
                <button class="delete-btn">Удалить</button>
                <button class="edit-btn">Редактировать</button>
            </div>
        `

        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteProduct)

        productsWrapper.appendChild(element)
}

const showProducts = () => {
    const products = localStorage.getItem("products") 
        ? JSON.parse(localStorage.getItem("products"))
        : [] 
    if (products.length > 0) {
        products.forEach(product => {
            createProducts(product.id, product.name)
        });
    }    

}

showProducts()


const showNotification = ()  => {
    notification.style.display = "block"
    setTimeout(() => {
        notification.style.display = "none"
    }, 3000)
}


const addToLocalStorage = (id, name) => {
    const products = localStorage.getItem("products") 
        ? JSON.parse(localStorage.getItem("products"))
        : []
        const newProduct = {id, name}
        products.push(newProduct)
        localStorage.setItem('products', JSON.stringify(products))
}


const resetOptions = () => {
    productName.value = ''
}


const deleteProduct = () => {

}



addForm.addEventListener("submit", addProduct)



{/* <div class="product">
<h5 class="product-name">Название продукта</h5>
<div class="product-actions">
    <button class="delete-btn">Удалить</button>
    <button class="edit-btn">Редактировать</button>
</div>
</div>
<div class="product">
<h5 class="product-name">Название продукта</h5>
<div class="product-actions">
    <button class="delete-btn">Удалить</button>
    <button class="edit-btn">Редактировать</button>
</div>
</div> */}