const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto){
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto *0.10)
    }

    return comision;
}

function validarVentas(){
    let ventas = recuperarTexto("txtVentas");
    let error = document.getElementById("errVentas");

    if (ventas === ""){
        error.textContent = "Ingrese el número de ventas";
        return false;
    }

    if (ventas.length > 5){
        error.textContent = "Máximo 5 caracteres";
        return false;
    }

    if (isNaN(ventas)){
        error.textContent = "Debe ser un número";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarSueldoBase(){
    let sueldo = recuperarTexto("txtSueldoBase");
    let error = document.getElementById("errSueldoBase");

    if (sueldo === ""){
        error.textContent = "Ingrese el sueldo base";
        return false;
    }
    if (isNaN(sueldo)){
        error.textContent = "Debe ser un número";
        return false;
    }
    if (sueldo.length > 5){
        error.textContent = "Máximo 5 números";
        return false;
    }
    if (parseFloat(sueldo) <= 0){
        error.textContent = "Debe ser mayor a 0";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarPrecio(){
    let precio = recuperarTexto("txtPrecio");
    let error = document.getElementById("errPrecio");

    if (precio === ""){
        error.textContent = "Ingrese el precio del producto";
        return false;
    }
    if (isNaN(precio)){
        error.textContent = "Debe ser un número";
        return false;
    }
    if (precio.length > 5){
        error.textContent = "Máximo 5 números";
        return false;
    }
    if (parseFloat(precio) <= 0){
        error.textContent = "Debe ser mayor a 0";
        return false;
    }
    error.textContent = "";
    return true;
}

function calcular(){
    
    if(validarVentas()== false){
        return;
    } 

    let SueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    // calculo de comision
    let comision = calcularComision(numeroVentas, PrecioProducto);
    let total = SueldoBase + comision; 

   document.getElementById("spSueldoBase").textContent = SueldoBase;
    document.getElementById("spComision").textContent = comision;
   document.getElementById("spTotal").textContent = total;
}