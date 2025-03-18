"use strict";
//IIFE Imediately invoked function expression
const basket = (function () {
  let items = [];

  return {
    items: items,

    addItem: function (item) {
      items.push(item);
    },
    totalItems: function () {
      return items.length;
    },
    totalPrice: function () {
      //reduce metoden, kører 1 x for hver element i array
      let totalPr = items.reduce((prev, current) => prev + current.price, 0);
      return totalPr;
    },
    removeItem: function (itemName) {
      let index = items.findIndex((item) => item.name === itemName);
      items.splice(index, 1);
    },
  };
})();

// basket.addItem({ name: "banana", price: 4.0 });
// basket.addItem({ name: "orange", price: 3.5 });

// console.log(basket.totalItems());
// console.log(basket.totalPrice());
// basket.removeItem("banana");
// console.log(basket.items);

//nodes export istedet for JS export
module.exports = basket;
