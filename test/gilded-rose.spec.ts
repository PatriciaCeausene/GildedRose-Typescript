import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('usual item quality decreases with 1 for sellIn >= 0', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('foo', 2, 5) ]);
        const expectedItems = [ new Item('foo', 1, 4) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('usual item quality decreases with 2 for sellIn < 0 ', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('foo', -2, 5) ]);
        const expectedItems = [ new Item('foo', -3, 3) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('usual item quality must be positive', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('foo', 2, 0) ]);
        const expectedItems = [ new Item('foo', 1, 0) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('aged brie with quality under 50 increases in value', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 2, 5) ]);
        const expectedItems = [ new Item('Aged Brie', 1, 6) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('aged brie with quality 50 stays the same', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 2, 50) ]);
        const expectedItems = [ new Item('Aged Brie', 1, 50) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('sufluras quatity and sellIn always stay the same', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('backstage passes with sellIn > 10 days increase quality+1', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 14, 5) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 13, 6) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });


    it('backstage passes with sellIn >= 6 days increase quality+2', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 7) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('backstage passes with sellIn >= 0 days increase quality+3', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 13) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('backstage passes with sellIn < 0 days have quality = 0', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10) ]);
        const expectedItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('conjured quality decreases with 2 for sellIn >= 0', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 10, 10) ]);
        const expectedItems = [ new Item('Conjured Mana Cake', 9, 8) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });

    it('conjured quality decreases with 4 for sellIn < 0', function() {
        // Given
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', -1, 10) ]);
        const expectedItems = [ new Item('Conjured Mana Cake', -2, 6) ];

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items).deep.equal(expectedItems);
    });
});
