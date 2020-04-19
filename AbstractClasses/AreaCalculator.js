"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var rectangle = new Rectangle_1.Rectangle(10, 20);
var square = new Square_1.Square(10);
var shapes = [];
shapes.push(rectangle);
shapes.push(square);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.calculateArea());
}
