"use strict";
var ocultar = document.getElementById("ocultar");
var ocultarCar = document.getElementById("carBox");
function ocultarWheel() {
    ocultar.style.display = "none";
}
var car;
// recojo los valores
var plate = document.getElementById("plate");
var brand = document.getElementById("brand");
var color = document.getElementById("color");
var result = document.getElementById('carInfo');
// Creo el veichulo
function createCar() {
    car = new Car(plate.value, brand.value, color.value);
    // Validar matricula!
    var validPlate = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate.value);
    if (!validPlate) {
        alert('Plate number should stars with 4 numbers and contains 3 letters');
    }
    else {
        // Output message
        ocultar.style.display = "block"; // aparece el formulari wheel
        ocultarCar.style.display = "none"; // formulari car invisible
    }
}
// recojo los valores de las ruedas
var wheel;
var brandWheel1 = document.getElementById("brand1");
var brandWheel2 = document.getElementById("brand2");
var brandWheel3 = document.getElementById("brand3");
var brandWheel4 = document.getElementById("brand4");
var diametro1 = document.getElementById("diametro1");
var diametro2 = document.getElementById("diametro2");
var diametro3 = document.getElementById("diametro3");
var diametro4 = document.getElementById("diametro4");
function addWheel() {
    var diametro = new Array;
    diametro.push(diametro1.valueAsNumber, diametro2.valueAsNumber, diametro3.valueAsNumber, diametro4.valueAsNumber);
    var i;
    var numero;
    var resultado = document.getElementById("wheelInfo");
    for (i = 0; i < diametro.length; i++) {
        var diametro_2 = new Array;
        diametro_2.push(diametro1.valueAsNumber, diametro2.valueAsNumber, diametro3.valueAsNumber, diametro4.valueAsNumber);
        var numero_1;
        var resultado_1 = document.getElementById("wheelInfo");
        var diametroNoEmpty = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro1.value);
        var diametroNoEmpty2 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro2.value);
        var diametroNoEmpty3 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro3.value);
        var diametroNoEmpty4 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro4.value);
        if (!diametroNoEmpty) {
            alert("Wheels diameters are required");
            return false;
        }
        else if (!diametroNoEmpty2) {
            alert("Wheels diameters are required");
            return false;
        }
        else if (!diametroNoEmpty3) {
            alert("Wheels diameters are required");
            return false;
        }
        else if (!diametroNoEmpty4) {
            alert("Wheels diameters are required");
            return false;
        }
    }
    for (var _i = 0, diametro_1 = diametro; _i < diametro_1.length; _i++) {
        numero = diametro_1[_i];
        if (numero < 0.4 || numero > 2) {
            alert("Wheel's diameter should be greater than 0.4 and less than or equal to 2!");
            return false;
        }
        numero++;
    }
    var wheel = new Wheel(brandWheel1.value, diametro1.valueAsNumber);
    var wheel2 = new Wheel(brandWheel2.value, diametro2.valueAsNumber);
    var wheel3 = new Wheel(brandWheel3.value, diametro3.valueAsNumber);
    var wheel4 = new Wheel(brandWheel4.value, diametro4.valueAsNumber);
    result.innerHTML = " Car: Plate " + car.plate + ", Brand " + car.brand + ", Color " + car.color;
    resultado.innerHTML = " Wheel 1:  Brand " + wheel.brand + " Diameter " + wheel.diameter + " <br >Wheel 2:  Brand " + wheel2.brand + " Diameter " + wheel2.diameter + " <br> Wheel 3:  Brand " + wheel3.brand + " Diameter " + wheel3.diameter + " <br> Wheel 4:  Brand " + wheel4.brand + " Diameter " + wheel4.diameter;
    car.addWheel(wheel);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    console.log(car);
}