class ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud, + "%";
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
        salud = salud + this.speakWisdom;
        this.velocidad = 10;
        this.fuerza= 10;
        this.sabiduria = 10;
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud: ${this.salud}`)
    } 
    speakWisdom(){
        super.drinkSake();
    }
    saludPlus(){
        console.log(`Salud ${this.salud}`);
    }
}

let superSensei = new Sensei("Oden",200);

console.log(superSensei);
superSensei.showStats();
superSensei.speakWisdom();
