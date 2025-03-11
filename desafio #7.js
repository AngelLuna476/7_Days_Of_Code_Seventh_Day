
function pedirNumero1 () {
    var1 = parseFloat(prompt("Ingrese un número"));
}

function pedirNumero2 () {
    var2 = parseFloat(prompt("Ingrese otro número"));
}

function operacion () {
    var3 = prompt("Operación deseada (Suma, Resta, Multiplicación, División)");
    
    if (var3 === "Suma") {
        resultado = var1 + var2;
    } else if (var3 == "Resta") {
        resultado = var1 - var2;
    } else if (var3 == "Multiplicación") {
        resultado = var1 * var2;
    } else if (var3 == "División") {
        resultado = var1 / var2;
    } else {
        resultado = "Operación no válida";
        return operacion();
    }
    alert("El resultado es: "+ resultado);
}

pedirNumero1();
pedirNumero2();
operacion();
console.log(resultado);