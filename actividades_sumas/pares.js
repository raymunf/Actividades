let inicio = 2;
let fin = 50;
let suma = 0;
let pares = [];

for (let i = inicio; i <= fin; i++) {
  if (i % 2 === 0) {
    pares.push(i);
    suma += i;
  }
}

console.log(`Los números pares del ${inicio} al ${fin} son:`);
console.log(pares);

console.log(`La suma de los números pares del ${inicio} al ${fin} es: ${suma}`);