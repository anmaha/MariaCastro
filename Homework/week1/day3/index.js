
const dishName =[
    {name:"Chicken", price: 6.00},
    {name:"Beef", price: 7.00},
    {name:"Vegetables", price: 8.00},
    {name:"Salad", price:5.00},
    {name:"Soup", price: 4.00}
];

//----Arrays

let dish = {
    orderSize: "size"
}
//--Hashes


let cart = [];
let balance = 0.00;
for ( let i in dishName) {
    cart += dishName[i].name
    balance += dishName[i].price
    cart += dish.orderSize
}

console.log(cart)