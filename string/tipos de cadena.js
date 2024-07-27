//sttring (cadena de caracteres)

let srt_1 ="hola soy un texto con comillas";
let srt_2 ='hola soy un texto con comillas simples';
let srt_3 ="comillas dentro de comillas \"ejemplo\" ";
let srt_4 ='comillas dentro de comillas"ejemplo"';
let srt_5 ="comillas dentro de comillas'ejemplo'";

console.log(srt_1);
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
console.log(srt_5);

//comillas invertidas (backticks) ` `
let srt_6 =`comillas invertidas backticks`;
console.log(srt_6);

let nombre ="ray";
let welcome=`hola, ${nombre}, esto es una variable dentro de otra variable`
console.log(welcome)


//Plantilla HTML
let plantilla =`
<html>
      <h3>Pagina web de ${nombre}</h3>
      <p>un parrafo </p>
</html>
`
console.log(plantilla)      