"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Triangle = void 0;
var shape_1 = require("./shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangle.prototype.getSide1 = function () {
        return this.side1;
    };
    Triangle.prototype.getSide2 = function () {
        return this.side2;
    };
    Triangle.prototype.getSide3 = function () {
        return this.side3;
    };
    Triangle.prototype.setSide1 = function (side1) {
        this.side1 = side1;
    };
    Triangle.prototype.setSide2 = function (side2) {
        this.side2 = side2;
    };
    Triangle.prototype.setSide3 = function (side3) {
        this.side3 = side3;
    };
    Triangle.prototype.getPerimeter = function () {
        return this.side1 + this.side2 + this.side3;
    };
    Triangle.prototype.getArea = function () {
        var p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    };
    return Triangle;
}(shape_1.Shape));
exports.Triangle = Triangle;
