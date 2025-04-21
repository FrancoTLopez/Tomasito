// Para resumir tuve que hacer el codigo de java script tres veces solo porque un "S" estaba donde no debia,
// jajaj pero bueno no hay nada que no se resuelva con  4 horas de mirara el codigo sin sesar


function redirection1(){
    location.href="index.html"
}
function redirection2(){
    location.href="pag2.html"
}

function agregar(valor){
    document.getElementById('pantalla').value += valor
}


function borrar(){
    document.getElementById('pantalla').value = ''
}
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}


// // Esto agrega a la pantalla el valor del boton de la calculadora que toquemos

// function agregar(valor){
//     document.getElementById('pantalla').value += valor
// }

// // Esta accion vacia la pantalla
// function borrar(){
//     document.getElementById('pantalla').value = ''
// }


// // Esta accion toma el valor de la pantalla y ejecuta los calculos
// function calcular(){
//     const valorPantalla = document.getElementById('pantalla').value
//     const resultado = eval( valorPantalla)
//     document.getElementById('pantalla').value = resultado
// }




// function agregar(valor){
//     document.getElementById('pantalla').value += valor
    
// }

// function borrar(){
//     document.getElementById('pantalla').value = ''
// }

// function calcular(){
//     const valorPantalla = document.getElementById('pantalla').value
//     const resultado = eval(valorPantalla)
//     document.getElementById('pantalla').value = resultado
// }