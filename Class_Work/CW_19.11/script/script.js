

class User{

    static _roles = ['admin', 'manager', 'root', 'guest'];
    static add_role(new_role){
        this._roles.push(new_role)
    }

    constructor(name, userName, age, role = 'guest'){
        this.name = name;
        this.userName = userName;
        this.age = age;
        
        this.change_role(role);



    }

    registeredUser(){
        const {name, userName, age, role} = this;
        console.log(`Registered Users:   ${name} ${userName} ${age} ${role}`)
    }
    birthday(){
        this.age += 1;
    }

    changeName(newname){
        this.name = newname
    }

    change_role(role){
        if (User._roles.includes(role)) {
            this.role = role;
        } else {
            this.role = null;
        }
    }

}



const user_1 = new User('Antony', 'Ant', 18, 'admin')
const user_2 = new User('Oleg', 'Compile', 24)
const user_3 = new User('Vitaliy', 'Vit', 46)


user_1.birthday()

user_2.changeName('Anatoliy')

user_1.registeredUser()
user_2.registeredUser()
user_3.registeredUser()


class Products{
    constructor(title, price, count){
        this.title = title
        this.price = price
        this.count = count
        this.income = 0
    }

    
    chageprice(newprise){
        if (newprise > 0) {
            this.price = newprise    
        } else {
            console.log(`Цена ${newprise} являеться отрицательной`)
        }
    }

    sale(){
        if (this.count === 0) {
            console.log(`Товар ${this.title} закончился`)
        } else { 
            this.income += this.price
            this.count--    
        }
    }

}


const product_1 = new Products ('Велосипед', 60000, 15)
const product_2 = new Products ('Ролики', 20000, 10)
const product_3 = new Products ('Самокат', 30000, 10)
const product_4 = new Products ('Сноуборд', 40000, 11)

// product_1.chageprice(-8)

// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()
// product_2.sale()


// console.log(product_1)
// console.log(product_2)
// console.log(product_3)
// console.log(product_4)