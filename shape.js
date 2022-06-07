"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.setName = function (name) {
        this.name = name;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    return Shape;
}());
exports.Shape = Shape;
