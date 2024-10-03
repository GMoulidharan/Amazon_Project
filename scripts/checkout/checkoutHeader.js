import { cart } from "../../data/cart.js";

export function renderCheckoutHeader(){
    let cartQunatity = 0;

    cart.forEach((cartItems) =>{
        cartQunatity += cartItems.quantity;
    });

    const checkoutHeaderHTML = `
    <div class="header-content">
            <div class="checkout-header-left-section">
                <a href="amazon.html">
                    <img src="images/amazon-logo.png" class="amazon-logo">
                    <img src="images/amazon-mobile-logo.png" alt="" class="amazon-mobile-logo">
                </a>
            </div>

            <div class="checkout-header-middle-section">
                Checkout (<a class="return-to-home-link js-return-to-home-link" href="amazon.html">${cartQunatity} items</a>)
            </div>
            <div class="checkout-header-right-section">
                <img src="images/icons/checkout-lock-icon.png">
              </div>

        </div>
    `;

    document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML;
}