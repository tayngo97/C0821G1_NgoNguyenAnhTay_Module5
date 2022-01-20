"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const main_1 = require("./main");
class Rectangle extends main_1.Shape {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    area() {
        return this._width * this._height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map