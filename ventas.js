const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto){
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto *0.10)
    }

    return comision;
}

function calcular(){
    // recuperamos propiedades de las cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase"); 
    let componenteVentas = document.getElementById("txtVentas"); 
    let componentePrecio = document.getElementById("txtPrecio");
    // recuperamos el valor de las cajas de texto
    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let PrecioProductoStr = componentePrecio.value;
    // convertimos el texto a numero
    let SueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let PrecioProducto = parseFloat(PrecioProductoStr);
    // calculo de comision
    let comision = calcularComision(numeroVentas, PrecioProducto);
    let total = SueldoBase + comision; 

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = SueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}