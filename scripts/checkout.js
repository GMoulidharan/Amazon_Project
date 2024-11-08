import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) =>{
        // console.log("start promise");
        loadProducts(() =>{
            // console.log('finished loading');
            resolve('value1');
        });
    }),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })

]).then((value) =>{
    console.log(value);
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
});

/*
new Promise((resolve) =>{
    // console.log("start promise");
    loadProducts(() =>{
        // console.log('finished loading');
        resolve('value1');
    });

}).then((value) =>{
    console.log(value);
    // console.log('next step');
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });  

}).then(() =>{
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
});
*/
/*
loadProducts(()=>{
    loadCart(() =>{
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    }); 
});
*/

