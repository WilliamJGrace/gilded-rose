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

    //BRIE TESTS
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
      it('The quality of item is never above 50', function() {
        item.name = "Aged Brie"
        item.sellIn = 5
        item.quality = 48
        items = [item]
        shop = new Shop(items)
        for(var i=0;i<6;i++){
          shop.updateQuality()
        }
        expect(shop.items[0].quality).toEqual(50)


      });
      //TEST FOR NORMAL Item
     it('descreses quality for a normal item by 1 per day', function() {
       item.name = "Corn Flakes"
       item.sellIn = 5
       item.quality = 4
       items = [item]
       shop = new Shop(items)
       for(var i=0;i<3;i++){
         shop.updateQuality()
       }
       expect(shop.items[0].quality).toEqual(1)
     });
     it('decreases quality dounle as much when sell date reaches 0', function() {
       item.name = "Corn Flakes"
       item.sellIn = 5
       item.quality = 10
       items = [item]
       shop = new Shop(items)
       for(var i=0;i<6;i++){
         shop.updateQuality()
       }
       expect(shop.items[0].quality).toEqual(3)
     });
     it('quality never goes below 0', function() {
       item.name = "Corn Flakes"
       item.sellIn = 5
       item.quality = 3
       items = [item]
       shop = new Shop(items)
       for(var i=0;i<6;i++){
         shop.updateQuality()
       }
       expect(shop.items[0].quality).toEqual(0)

     });



    })
  })


});
