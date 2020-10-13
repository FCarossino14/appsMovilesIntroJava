class Persona {

	constructor(nombre, edad) {
this.nombre = nombre;
this.edad = edad;
}

presentarse() {
return "Hola me llamo " + this.nombre + " y tengo " + this.edad + " anios"; // no tengo enie en el teclado
}

}

var persona = new Persona("Fran", 23);
console.log(persona.presentarse());


