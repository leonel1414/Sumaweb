function sumar(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let elementoResultado = document.getElementById('resultado');

    //console.log(`el valor del numero 1 es: ${numero1}`);
    //console.log(`el valor del numero 1 es: ${numero2}`);

    var resultado = numero1 + numero2;

    if(resultado > 100){
        elementoResultado.textContent = `el resultado es MAYOR O IGUAL A 100 (${resultado})`;
    }else{
        elementoResultado.textContent = `el resultado es MENOR A 100 (${resultado})`;
    }
}