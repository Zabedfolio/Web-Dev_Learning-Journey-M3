// const products = [
//     {name: 'phone', price: 12000},
//     {name: 'laptop', price: 32000}
// ]

// console.log(products[0])

const products = [
    {id: 1, name: 'Phone', price: 19000},
    {id: 2, name: 'Laptop', price: 32000},
    {id: 3, name: 'Tablet', price: 15000},
    {id: 4, name: 'Monitor', price: 22000},
    {id: 5, name: 'Keyboard', price: 5000},
    {id: 6, name: 'Mouse', price: 3000},
    {id: 7, name: 'Headphones', price: 8000},
    {id: 8, name: 'Speaker', price: 12000},
    {id: 9, name: 'Webcam', price: 7000},
    {id: 10, name: 'Printer', price: 25000}
];

// for(const product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        // console.log(product)
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result)