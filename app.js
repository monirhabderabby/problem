fetch('https://monirhabderabby.github.io/product-api/e-commerce%20product%20API%20-%20Sheet1.json')
.then(res=> res.json())
.then(data => send(data))

const globalId = []
const globalProduct = []

const loadId = id =>[
    globalId.push(id)
    
]
const send = data =>[
    globalProduct.push(data)
]
const result = () =>{
    return globalProduct.filter(product=> globalId.includes(product.id))
}

const output = result()
console.log(output);


