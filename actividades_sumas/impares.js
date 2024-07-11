let inicio = 5;
let fin = 59;
let suma = 0;
let impares = [];

for (let i = inicio; i <= fin; i++) {
  if (i % 2 !== 0) {
    impares.push(i);
    suma += i;
  }
}

console.log(`Los números impares del ${inicio} al ${fin} son:`);
console.log(impares);

console.log(`La suma de los números impares del ${inicio} al ${fin} es: ${suma}`);