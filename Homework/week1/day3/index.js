let dish = {
    price: 1.00,
    orderSize: "size"
}

const dishName =["Chicken","Beef","Vegetables","Salad","Soup"];



let cart = [];

for ( let x in dishName) {
    cart += dishName[x]
    cart += dish.price
    cart += dish.orderSize
}