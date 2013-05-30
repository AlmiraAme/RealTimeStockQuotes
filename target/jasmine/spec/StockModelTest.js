/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Date: 26-3-13
 * Time: 23:05
 * To change this template use File | Settings | File Templates.
 */

describe('The StockModel constructor function',function(){
    it('should create a stockmodel and a stock in it',function(){
        makeStock= new StockModel("BBC","4.50","+0.58","+1.2%");
        result = makeStock.stock;
        expect(result.length).toBe(4);
    });
});