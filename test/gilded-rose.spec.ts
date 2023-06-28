import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should test usual product', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('foo', 2, 5) ]);
        const expectedItems = [ new Item('foo', 1, 4) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test aged brie', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 2, 5) ]);
        const expectedItems = [ new Item('Aged Brie', 1, 6) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test aged brie', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 2, 50) ]);
        const expectedItems = [ new Item('Aged Brie', 1, 50) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test sufluras', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test backstage passes for more than 10 days', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 5) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 8) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });


    it('should test backstage passes for less than 10 days', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 7) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test backstage passes for less than 5 days', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 13) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test backstage passes after the concert', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('should test conjured', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 10, 10) ]);
        const expectedItems = [ new Item('Conjured Mana Cake', 9, 8) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });
});
