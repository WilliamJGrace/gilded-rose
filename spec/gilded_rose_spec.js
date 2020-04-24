var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("Item", () =>{
    it("should return an item name", function() {
      const item = new Item("foo", 1, 2)
      expect(item.name).toEqual("foo")
    });
    it("should return an item sellinvalue", function() {
      const item = new Item("foo", 1, 2)
      expect(item.sellIn).toEqual(1)
    });
    it("should return an items quality value", function() {
      const item = new Item("foo", 1, 2)
      expect(item.quality).toEqual(2)
    });

  })

  describe("Shop", () => {
    describe("#updateQuality", () => {
      let item
      let items
      let shop
      beforeEach(() => {
        item = jasmine.createSpyObj('item',['name','sellIn','quality'] )
      })
      it("increases quality of brie by 1 as sell date decreases by 1", () => {
        item.name = "Aged Brie"
        item.sellIn = 3
        item.quality = 0
        items = [item]
        shop = new Shop(items)

        for(var i=0;i<3;i++){
          shop.updateQuality()
        }
        expect(shop.items[0].quality).toEqual(3)
      })
      it("increases quality of  brie by 2 when sellin reahes 0", () => {
        item.name = "Aged Brie"
        item.sellIn = 3
        item.quality = 0
        items = [item]
        shop = new Shop(items)

        for(var i=0;i<5;i++){
          shop.updateQuality()
        }
        expect(shop.items[0].quality).toEqual(7)


      })
    })
  })


});
