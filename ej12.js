class Persona {

	constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
}

    presentarse() {
        return "Hola me llamo " + this.nombre + " y tengo " + this.edad + " anios"; // no tengo enie en el teclado
    }
}

class Estudiante extends Persona{

	constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
}

estudiando() {
    return "Estudiando con " + this.profesor;
}

setProfesor(nuevoProfesor) {
    this.profesor = nuevoProfesor;
}

}

var estudiante = new Estudiante("Juan", 25, "Carlos");
console.log(estudiante.presentarse());
console.log(estudiante.estudiando());
estudiante.setProfesor("Jorge");
console.log(estudiante.estudiando());
