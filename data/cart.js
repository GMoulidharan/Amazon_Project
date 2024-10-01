// Contain all the code releated to the cart
export let cart = JSON.parse(localStorage.getItem('cart'));

//Giving the default value to cart when the cart is in empty/didn't exist
if(!cart){
    cart = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId: '1'
    },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId: '2'

    }];
}

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
        //check product already in the cart
        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        //Selected quantities added in cart
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

        const quantity =Number(quantitySelector.value);


        //if in the cart Inc the quantity
        if(matchingItem){
            matchingItem.quantity += quantity;
        }else{
            cart.push({
                productId:productId,
                quantity:quantity,
                deliveryOptionId: '1'
            });
        }

        saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });

    //reassing the variable so change const to let
    cart = newCart;

    saveToStorage();
}

export function calculateCartQuantity(){
    let cartQunatity=0;
    cart.forEach((cartItem)=>{  
        cartQunatity += cartItem.quantity;
    });
    return cartQunatity;
}

export function updateQuantity(productId,newQuantity){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;
    saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    //check product already in the cart
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}