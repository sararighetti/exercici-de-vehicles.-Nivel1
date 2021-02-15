"use strict";
var Car = /** @class */ (function () {
    function Car(plate, brand, color) {
        this.wheels = new Array();
        this.coches = new Array();
        this.plate = plate;
        this.brand = brand;
        this.color = color;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Car.prototype.addCar = function (cars) {
        this.coches.push(cars);
    };
    return Car;
}());
