import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');
//test case
console.log('convert cents into rupees');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}
//edge cases
console.log('works with 0');
if(formatCurrency(0)=== '0.00'){
    console.log('passed');
}else{
    console.log('failed');
}
console.log('round up to the nearest cents');
if(formatCurrency(2000.6) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}