let Store = {
    Dishes: [
        {name:'Chicken',price: 6},
        {name:"Beef", price: 7},
        {name:"Vegetables", price: 8},
        {name:"Salad", price:5},
        {name:"Soup", price: 4}
    ],
    Drinks: [
        {name:'Mango',price: 3},
        {name:"Tea", price: 2},
        {name:"Soda", price: 1},
        {name:"Coffee", price:2}
    ]
}

let shoppingCart = [];

let cartCount = document.getElementById('cart');
let checkoutDisplay = document.getElementById('checkout-id');

const updateCheckoutDisplay = () => {
    let newHTMLElements =[];
    let totalPrice = 0;

    for(let i=0; i<shoppingCart.length; i++){
        let shoppingCartItem = shoppingCart[i];
        let shoppingCartItemName = shoppingCartItem.name;
        let shoppingCartItemPrice = shoppingCartItem.price;
        
        totalPrice = totalPrice + shoppingCartItemPrice;

        let htmlElement = "<div class='checkout-item'><p>" + shoppingCartItemName + "</p><p>" + shoppingCartItemPrice + "</p></div>";
        newHTMLElements[i] = htmlElement;

    }
    checkoutDisplay.innerHTML = "";
    for(let i=0; i < newHTMLElements.length; i++)
    {
        checkoutDisplay.innerHTML += newHTMLElements[i] +  '\n';
    }

    let totalPriceCheckoutElement = "<div class='checkout-item'><h3>Total</h3><h3>" + totalPrice + "</h3></div>";
    checkoutDisplay.innerHTML += totalPriceCheckoutElement;

};

const addItemToCart = (menuSectionName, itemIndex) => {
    let menuSection = Store[menuSectionName];
    console.log(menuSectionName);
    let menuItem = menuSection[itemIndex];
    console.log(menuItem);

    if (menuItem !== undefined)
    {
        console.log("Found: " + menuItem.name + ", adding to cart.");
        let shoppingCartLength = shoppingCart.length;
        shoppingCart[shoppingCartLength] = menuItem;

        console.log(shoppingCart);
        
        cartCount.innerHTML = "Cart: " + shoppingCartLength + ", Last Added Item: " + menuItem.name;
    }
    else 
    {
        console.log("Should not get to this point...but just in case");
    }
    updateCheckoutDisplay();
};

const removeItemFromCart = (menuSectionName, itemIndex) =>{
    if (shoppingCart.length > 0)
    {
        let cartItem = undefined;
        let menuSection = Store[menuSectionName];
        let storeItem = menuSection[itemIndex];

        for (let i = 0; i<shoppingCart.length; i++)
        {
            let currentShoppingCartItem = shoppingCart[i];
            if (currentShoppingCartItem === storeItem)
            {
                cartItem = currentShoppingCartItem;
                break;
            }
        }
        console.log(cartItem);
        if (cartItem !== undefined)
        {
            console.log("Found: " + cartItem.name + ", removing from cart. ");
            let itemIdentificationNumber = shoppingCart.indexOf(cartItem);
            shoppingCart.splice(itemIdentificationNumber, 1);

            console.log(shoppingCart);

            cartCount.innerHTML = "Cart: " + shoppingCart.length;
        }
        updateCheckoutDisplay();
    }
};

// const dishName =[
//     {name:"Chicken", price: 6.00},
//     {name:"Beef", price: 7.00},
//     {name:"Vegetables", price: 8.00},
//     {name:"Salad", price:5.00},
//     {name:"Soup", price: 4.00}
// ];

// //----Arrays

// let dish = {
//     orderSize: "size"
// }
// //--Hashes


// let cart = [];
// let balance = 0.00;
// for ( let i in dishName) {
//     cart += dishName[i].name
//     balance += dishName[i].price
//     cart += dish.orderSize
// }

// console.log(cart)

// // Function changeTitle
// const changeTitle = (topic) => {
//     let switch_it_up = document.querySelector('.title');
//     switch_it_up.innerHTML = topic;
// }
// // call the function we just made changeTitle
// // pass it a new string or topic
// //changeTitle("Space Shuttles are cool");

// let shoppingCart = []

// let allProducts = [product1,product2]


// //function addToCart
// const addToCart = () => {
//     // cart Recognize Item
//     document.querySelector(".numHolder")
//     // Take item and add it to the cart

//     // Display the new result of the cart now that something has been added


// }