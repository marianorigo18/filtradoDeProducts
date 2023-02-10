import {categories} from './exports/data.js';

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');

asignarListeners()

function asignarListeners(){
    $form.addEventListener('submit', capturarData)
    // $input.addEventListener('keyup', showSuggestions)
}

function capturarData(e){
    e.preventDefault()
    if($input.value == ""){
        console.log('No se permiten valores vacios');
    }else{
        filtrarElementos($input.value)
    }
    $form.reset();
}

function filtrarElementos(param){
    categories.map((elemento)=>{
        let result = elemento.categories.filter(elemento => elemento.title.includes(param))
        if(result.length <= 0){
            console.log('no se encuentra este articulo, intenta buscar con otras palabras');
        }else{
            for(let item of result){
                console.log(item)
            }
        }
    })
}

// function showSuggestions(){
//     if($input.value.length >= 1){
//         filtrarArray($input.value)
//     }
// }


// function filtrarArray (param){
//     const results = iluminacionT.filter(elem => elem.categories.includes(param)) 
//         if(results.length <= 0){
//             console.log('no se encuentra este articulo, intenta buscar con otras palabras');
//         }else{
//             for(const product of results){
//                 console.log(`${product.link} sugerencias ${product.title}, categorias ${product.categories}`);
//             }
//         }
// }