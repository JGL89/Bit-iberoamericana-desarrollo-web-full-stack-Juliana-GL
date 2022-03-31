// variables es un contenedor o una caja de información //
var nombre = 'Juliana'

nombre = 'Juliana';
console.log(nombre)

/* LET Es una variable local pero no se puede modificar en el mismo bloque
 de contenido, limita su alcance al bloque */


 var web= 'http://mapamundi.com';

 let ip= '192845678';

 web = "http://mapamundi.com";
 ip = "192845678";

 console.log(web, ip);

 //Constantes es igual que una variable pero su valor no se puede modificar y por lo tanto no se puede cambiar //

 /* condicionales  sintaxis if (condition) {
     */

    /* Operadores relacionales 
    Mayor : >
    Menor : <
    mayor o igual : >=
    Menor o igual : <=
    Asignacion: =
    Igual: ==
    Igual si o si: === igual el valor y el tipo de dato
    Distinto: !=
*/

let nota = Number(prompt("Ingresa tu nota"));

if (nota <=4) {
    alert ("has reprobado");
}else if (nota == 5){
    alert ("Es insuficiente");
}else if (nota ==7){
    alert ("Bien, pasaste");
}


