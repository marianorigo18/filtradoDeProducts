const $form = document.querySelector('#form');
const $input = document.querySelector('#input');

import {industriaT, iluminacionT, conductoresT, terminalesT, normalizadosT, instrumentosT, aereoT, emergenciaT, armadosBauhaus, herramientasT, morceteriaT} from './exports/data.js';

asignarListeners()
function asignarListeners(){
    $form.addEventListener('submit', capturarData);
    // $input.addEventListener('keyup', mostrarSugerencias)
}


function capturarData(e){
    e.preventDefault()
    let input = e.target.querySelector('input').value;
    if(input == ""){
        console.log('ingrese una palabra');
    }else{
        filtrarArray(input)
    }
}

function filtrarArray (param){
    const results = iluminacionT.filter(elem => elem.categories.includes(param)) 
        if(results.length <= 0){
            console.log('no se encuentra este articulo, intenta buscar con otras palabras');
        }else{
            for(const product of results){
                console.log("Ir a " + product.title)
                console.log("pagina " + product.link)
                console.log("categorias: " + product.categories)
            }
        }
}