//var Emitter= require('./emitter');
var Emitter = require(`events`);
var Config = require(`./config`);
//En este caso usaremos el event emitter propio de NODE JS, este es mucho más
//robusto y probado, y se incluye facilmente.
//Se inyectan ambas dependencias.

var emtr = new Emitter();
var config = Config;
//Se inicia el "emisor de eventos"

emtr.on(config.events.GREET, () => {
    console.log(`Somewhere, someone said hello.`);
});
//se modifica con el config.events.GREET para evitar errores de escritura y por buenas practicas.

emtr.on(config.events.GREET, () => {
    console.log(`A greeting ocurred!`);
});
//Se agregan 2 funciones con el mismo nombre 
//pero con diferentes salidas.

console.log(`Hello!`);
emtr.emit(config.events.GREET);
//Se mandan a llamar dentro del emisor a todas las funciones
//que su nombre sea greet. Y gracias a esto es que al hacer node app
//nos sale primero el console log y luego se imprimen las funciones que tienen greet como type. 

emtr.on(config.events.JUMP, () => {
    console.log(`someone jumped!`);
});

console.log(emtr);
emtr.emit(config.events.JUMP);

//Al hacer un console.log de emtr podemos ver todos los eventos que hay,
//en este caso existen los eventos greet y jump.
//Y al hacer emit al type jump nos imprime las funciones que posean este type, en este
//caso solo una, la de someone jumped!



//Al usar el event emitter de node js todo se mantiene igual, con la diferenci de que
//ahora al mostrar el emtr lo muestra con una sintaxis diferente, mucho más ordenado
//y con más cosas.

//El usar el config para mapear los string es mucho más eficiente porque permite que haya 
//menos errores de dedo o typos, y permite darle una estructura más organizada.
//Y como es de esperar, sigue imprimiendo los mismos valores.
