// clases javascript

// class Player {
//     constructor(nombre, colorSombrero) {
//         this._nombre = nombre;
//         this._colorSombrero = colorSombrero;
//     }
//     saltar() { }
//     correr() { }
//     saludar() {
//         return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`
  
//     }

//     get nombre(){
//         return this._nombre;
//     }

//     set nombre(nuevoNombre){
//         this._nombre = nuevoNombre
//     }
// }

// let player1 = new Player('Mario', 'rojo')
// let player2 = new Player('luigi', 'verde')

// // get

// console.log(player2.nombre);

// // set
// player1.nombre = 'Alberto';


class Personaje{
    constructor(nombre, colorDeTenis){
        this._nombre = nombre;
        this._colorDeTenis  = colorDeTenis;
    }

    correr(){}
    saltar(){}
    saludar(){
        return ` Hola soy ${this._nombre} y mis tenis son de color ${this._colorDeTenis}`
    }

    //get 

    get nombre(){
        return this._nombre;
    }

    //set

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

}

let personaje1 = new Personaje ('Sonic', 'Rojos')
let personaje2 = new Personaje ('Tails', 'blancos')


//get
console.log(personaje1.nombre)

// set
personaje1.nombre = 'Robotnic'
console.log(personaje1.nombre)

