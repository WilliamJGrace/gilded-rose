var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("item", () =>{
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


});
