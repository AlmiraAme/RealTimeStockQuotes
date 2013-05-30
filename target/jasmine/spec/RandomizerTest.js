/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Date: 26-3-13
 * Time: 10:23
 * To change this template use File | Settings | File Templates.
 */

describe('The Randomizer function',function(){
    it('create first data',function(){
        anRandomizer = new Randomizer();
        var arraylijst = anRandomizer.firstData();
        var lengthList = arraylijst.length;
        expect(lengthList).toEqual(24);
    });
});

describe('The Randomizer function',function(){
    it('create random data',function(){
        var arraylijstOld = anRandomizer.firstData();
        var arraylijstNew = anRandomizer.generateRandomStocks(arraylijstOld);
        expect(arraylijstOld).toNotEqual(arraylijstNew);
    });
});