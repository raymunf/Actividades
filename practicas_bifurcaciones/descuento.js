n=22
let descuento =0;
let total = 10;

if (n>=0 && n<=10){
    descuento = n *0.05;
    console.log(descuento);
    total= descuento*0.16;
    console.log(total);
}else if(n>=11 && n<=20) {
    descuento = n * 0.10;
    console.log(descuento);
    total= descuento * 0.16;
    console.log(total);
}else if (n>=21) {
    descuento = n *0.15;
    console.log(descuento);
    total= descuento*0.16;
    console.log(total);
}