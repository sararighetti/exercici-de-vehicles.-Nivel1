let ocultar= document.getElementById("ocultar")! as HTMLInputElement;
let ocultarCar =document.getElementById("carBox")! as HTMLInputElement;
function ocultarWheel(){
    ocultar.style.display="none";
}


let car:Car;
// recojo los valores
let plate = document.getElementById("plate")! as HTMLInputElement;
let brand = document.getElementById("brand")! as HTMLInputElement;
let color = document.getElementById("color")! as HTMLInputElement;
let result = document.getElementById('carInfo') as HTMLInputElement;

// Creo el veichulo
function createCar() {
 car = new Car(plate.value, brand.value, color.value);

    // Validar matricula!
    let validPlate = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate.value);

    if (!validPlate) {
        alert('Plate number should stars with 4 numbers and contains 3 letters');
    } else {
        // Output message
      
        ocultar.style.display="block"; // aparece el formulari wheel
        ocultarCar.style.display="none";  // formulari car invisible
    }
}
// recojo los valores de las ruedas
let wheel:Wheel;
let brandWheel1 = document.getElementById("brand1")! as HTMLInputElement;
let brandWheel2 = document.getElementById("brand2")! as HTMLInputElement;
let brandWheel3 = document.getElementById("brand3")! as HTMLInputElement;
let brandWheel4 = document.getElementById("brand4")! as HTMLInputElement;
let diametro1 = document.getElementById("diametro1")! as HTMLInputElement;
let diametro2 = document.getElementById("diametro2")! as HTMLInputElement;
let diametro3 = document.getElementById("diametro3")! as HTMLInputElement;
let diametro4 = document.getElementById("diametro4")! as HTMLInputElement;


function addWheel(){
    let diametro = new Array;
    diametro.push(diametro1.valueAsNumber,diametro2.valueAsNumber,diametro3.valueAsNumber,diametro4.valueAsNumber);
    let i;
    let numero;
    let resultado = document.getElementById("wheelInfo")! as HTMLInputElement;
for(i=0; i<diametro.length;i++){
    let diametro = new Array;
    diametro.push(diametro1.valueAsNumber,diametro2.valueAsNumber,diametro3.valueAsNumber,diametro4.valueAsNumber);
    let numero;
    let resultado = document.getElementById("wheelInfo")! as HTMLInputElement;
    let diametroNoEmpty = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro1.value);
    let diametroNoEmpty2 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro2.value);
    let diametroNoEmpty3 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro3.value);
    let diametroNoEmpty4 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro4.value);
        if(!diametroNoEmpty){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty2){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty3){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty4){
            alert("Wheels diameters are required");
            return false;
        } 
    }

    for(numero of diametro){
        if(numero <0.4 || numero >2 ){
            alert("Wheel's diameter should be greater than 0.4 and less than or equal to 2!");  
            return false;
        }
        numero++;
        }      
        let wheel = new Wheel(brandWheel1.value, diametro1.valueAsNumber);
        let wheel2 = new Wheel(brandWheel2.value, diametro2.valueAsNumber);
        let wheel3 = new Wheel(brandWheel3.value, diametro3.valueAsNumber);
        let wheel4 = new Wheel(brandWheel4.value, diametro4.valueAsNumber);
        result.innerHTML = ` Car: Plate ${car.plate}, Brand ${car.brand}, Color ${car.color}`;
        resultado.innerHTML =  ` Wheel 1:  Brand ${wheel.brand} Diameter ${wheel.diameter} <br >Wheel 2:  Brand ${wheel2.brand} Diameter ${wheel2.diameter} <br> Wheel 3:  Brand ${wheel3.brand} Diameter ${wheel3.diameter} <br> Wheel 4:  Brand ${wheel4.brand} Diameter ${wheel4.diameter}`;
        car.addWheel(wheel);
        car.addWheel(wheel2);
        car.addWheel(wheel3);
        car.addWheel(wheel4);
        console.log(car);
}