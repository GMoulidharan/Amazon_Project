
//sharing these function betwen checkout.js and amazon.js
export function formatCurrency(priceCents){
    return (Math.round(priceCents) /100).toFixed(2);
}

export default formatCurrency;