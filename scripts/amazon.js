const products = [{
    image: 'images/Products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    price: 50090
}, {
    image: 'images/Products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4,
        count: 87
    },
    price: 250095
}, {
    image: 'images/Products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4.5,
        count: 56
    },
    price: 40099
}

];


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
                    ₹${(product.price / 100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select>
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

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">Added
                </div>

                <button class="add-to-cart-button button-primary">Add to Cart</button>
            </div>
    `;

});

console.log(productsHTML);

//combine this HTML together and put it on web page (using DOM)

 document.querySelector('.js-products-grid').innerHTML = productsHTML;