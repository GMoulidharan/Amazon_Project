import { cart, addToCart, calculateCartQuantity} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
let productsHTML='';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
                <div class="product-image-container">
                    <img src="${product.image}" class="product-image">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/Rating/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count">
                        ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    ₹${formatCurrency(product.priceCents)}
                </div>

                <div class="product-quantity-container">
                    <select class="js-quantity-selector-${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-space"></div>

                <div class="added-to-cart js-added-to-cart-${product.id}">
                    <img src="images/icons/checkmark.png">Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart"
                data-product-id="${product.id}">Add to Cart</button>
            </div>
    `;

});


//combine this HTML together and put it on web page (using DOM)

 document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQunatity(){
    // Calculate the total quantity
    let cartQunatity=calculateCartQuantity();

    //Get cart Qunatity element into JS using DOM

    document.querySelector('.js-cart-quantity').innerHTML=cartQunatity;
}   

 updateCartQunatity();
 document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId= button.dataset.productId;
        addToCart(productId);
        updateCartQunatity();

        const addedMessage=document.querySelector(`.js-added-to-cart-${productId}`);

        addedMessage.classList.add('added-to-cart-visible');

        setTimeout(()=>{
            addedMessage.classList.remove('added-to-cart-visible')
        },2000);
    });
 });