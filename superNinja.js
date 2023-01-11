class ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = 3;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Yo soy ${this.nombre}`)
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud: ${this.salud}`)
    } 
    drinkSake(numero){
        this.salud += numero;
    }
    saludPlus(){
        console.log(`Salud ${this.salud}`);
    }
}


class Sensei extends ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria){
        super(nombre, salud, velocidad, fuerza, sabiduria);
        this.velocidad = 10;
        this.fuerza= 10;
        this.sabiduria = 10;
        this.salud = 200;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
let superSensei = new Sensei("Oden",200);

console.log(superSensei);
superSensei.showStats();
superSensei.speakWisdom();
