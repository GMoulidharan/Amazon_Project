
//sharing these function betwen checkout.js and amazon.js
export function formatCurrency(priceCents){
    return (priceCents /100).toFixed(2);
}