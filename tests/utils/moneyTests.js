import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', ()=>{
    it('convert cents into rupees', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('round up to the nearest cents',()=>{
        expect(formatCurrency(2000.6)).toEqual('20.01');
    });
})