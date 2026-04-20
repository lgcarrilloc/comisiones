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
        
    let SueldoBase = recuperarFloat("txtSueldoBase")
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

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