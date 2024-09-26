// Contain all the code releated to the cart
export const cart =[];

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
                quantity:quantity
            });
        }
}
