const result = fetch('https://fakestoreapi.com/products/10000000000000')
.then(resp => {
    console.log(resp)
    return resp.json()
}, err => {
    console.log(err);
})
.then(data => console.log(data), () => console.log('Json pars error'));


const promies = new Promise((resolve, reject) => {
    const rand_value = Math.random();
    if (rand_value > 0.5) {
        resolve(rand_value)
    }else{
        reject(rand_value)
    }
})

promies.then(
    (value) => console.log(`Resolve: ${value}`),
    (value) => console.log(`Reject: ${value}`)
)