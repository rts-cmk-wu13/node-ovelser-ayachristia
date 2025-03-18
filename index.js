"use strict";
//node require istedetfor JS import - i node blive js antaget
const basket = require("./basket");

console.log("Hello, World!");
basket.addItem({ name: "banana", price: 4.0 });
console.log(basket.items);
