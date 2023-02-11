const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $sugestions = document.querySelector('#sugestions');
import {categories} from './exports/data.js';
asignarListeners()



function asignarListeners(){
    $form.addEventListener('keyup', capturarData)
    // $input.addEventListener('keyup', showElements)
}

function capturarData(e){
    e.preventDefault()
    if($input.value == ""){
        console.log('No se permiten valores vacios');
    }else{
        filtrarElementos($input.value)
    }
    // $form.reset();
}

function filtrarElementos(param){
    categories.map((elemento)=>{
        let result = elemento.categories.filter(elemento => elemento.title.includes(param))

        if(result.length >= 1){
            for(let item of result){
                showElements(item)
                return;
            }
        }
    })
}

function showElements(item){
    console.log(item)
    
    $sugestions.innerHTML =  `<li><a href="${item.link}">${item.title}</a></li>`;
}
