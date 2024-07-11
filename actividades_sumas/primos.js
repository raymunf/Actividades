let inicio = 2;
let fin = 100;
let primos = [];

for (let i = inicio; i <= fin; i++) {
  let esPrimo = true;
  if (i <= 1) {
    esPrimo = false;
  } else {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  if (esPrimo) {
    primos.push(i);
  }
}

console.log(`Los números primos del ${inicio} al ${fin} son:`);
console.log(primos);