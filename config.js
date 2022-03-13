//Entre las buenas practicas de los programadores se encuentra el hacer una archivo de config.js
//y mapear un nombre de variable a una string, de esta forma el string tiene su valor en un solo
//lugar y si se tiene que cambiar por alguna razón, es menos probable que existan typos o 
//errores de escritura, los cuales son muy dificiles de encontrar.


module.exports = {
    events: {
        GREET: `greet`,
        JUMP: `jump`
    }
}
//esta dependencia tiene 2 eventos: greet y jump.