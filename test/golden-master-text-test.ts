import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
describe('testing updating products', () => {

    it('should follow the rules', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 30, 20), new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30),new Item('Sulfuras, Hand of Ragnaros', 0, 30), new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30), new Item('new product', 3, 0) ]);
        const expectedItems: Item[] =  [ new Item('Aged Brie', 29, 21),new Item('Backstage passes to a TAFKAL80ETC concert', 9, 32),  new Item('Sulfuras, Hand of Ragnaros', 0, 30), new Item('Backstage passes to a TAFKAL80ETC concert', 3, 33) , new Item('new product', 2, 0) ];

        // When
        const items = gildedRose.updateQuality();

        // Test
        expect(items).deep.equal(expectedItems);
    });

});