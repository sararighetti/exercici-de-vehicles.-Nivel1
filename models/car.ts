class Car{
    plate:string;
    brand:string;
    color:string;
    wheels:Wheel[]=new Array();
    coches:Car[]=new Array();
    
    constructor(plate:string,brand:string,color:string){
        this.plate=plate;
        this.brand=brand;
        this.color=color;
    }    
    addWheel(wheel:Wheel):any{
        this.wheels.push(wheel);
    }
    addCar( cars:Car):any{
        this.coches.push(cars);
    }
}