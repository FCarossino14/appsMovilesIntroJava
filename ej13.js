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

class Profesor extends Persona{

	constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        this.estudiantes = estudiantes;
}

enseñando() {
    return console.log(this.estudiantes);
}

addEstudiante(unEstudiante) {
    this.estudiantes.push(unEstudiante.nombre);
    unEstudiante.setProfesor(this.nombre);
}

}

var estudiante = new Estudiante("Martin", 25, "Lucas");
console.log(estudiante.estudiando());
var profesor = new Profesor("Carlos", 31, ["Juan", "Fran", "Matias"]);
profesor.addEstudiante(estudiante);
profesor.enseñando();
console.log(estudiante.estudiando());
