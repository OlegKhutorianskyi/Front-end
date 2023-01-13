// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {

//         let num = 15
//         if (num > 15) {
//             resolve("data"), 500
//         } else {
//             reject("operation ending with error")
//         }

//     }, 500)
// })


// promise.then((val) => {
//     console.log(val)
// })


fetch("http://localhost:3000/posts")
    .then((response) => {
       return response.json()
    }) 
    .then(data => console.log(data))