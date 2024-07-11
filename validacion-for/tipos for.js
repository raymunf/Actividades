//for
/* estructrura
for (inicializacio,codificacion,actualizacion){
bucle
}

let i=0;

i=i+1
i+=1

i++
i--
*/

//tipos de for
//for
for(let i=0; i<10; i++){
    //aqui va un bucle
    console.log(i);
}

let lista =[1,4,6,8,10,15,18]
for(let i=0; i < lista.length/*longitud de la cadena*/; i++){
    console.log(lista[i]);
}
//for...of
for(let valor of lista) {
    console.log(valor)
}
//for...in
let persona = {
    nombre : "ray",
    apellido : "lara",
    edad : 23,
    isdeveloper : true
}
console.log(persona.nombre)

let prop="edad";
console.log(persona[prop])

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}


//foreach
lista.forEach(valor=>/*esta es una arrow function*/{
    console.log(valor);
})