function Emitter(){
    this.events= {};
}
//Aquí se define la función constructora que se llama Emitter, la cual tiene un objeto vacío.

Emitter.prototype.on = function (type, listener) {
    this.events [type] = this.events[type] || [];
    this.events[type].push(listener);
}
//Mediante esta función llamada "on" que recibe los parametros type y listener podemos
//introducir funciones en el array. En el type va la función que corresponde al listener.

Emitter.prototype.emit=function (type) {
    if(this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}
//En esta función llamada "emit" se recibe el parametro type, la cual corresponde al nombre
//de la función que invocaremos.

module.exports = Emitter;
//esta línea de código sirve para exportar este modulo completo mediante el nombre Emitter.