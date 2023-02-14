const inputText = document.querySelector('#inputText');

const listGroup = document.querySelector('#sugestions');

let item = listGroup.querySelectorAll('li');

inputText.addEventListener('focus', () => {
    if(!listGroup){
        return;
    }
    Array.from(item).forEach(element => {
        element.style.display = 'block';
    })
})

inputText.addEventListener('keydown', (e) => {
    let itemActual = Array.from(item).findIndex(item => item.classList.contains('active'));
    if(e.keyCode==13){
        e.preventDefault();
        redirection(item[itemActual].firstChild.getAttribute('href'))
        if(item[itemActual]){
            item[itemActual].click();
        }
    }if(e.keyCode==38 || e.keyCode==40){
        if(item[itemActual]){
            item[itemActual].classList.remove('active');
        }
        itemActual += (e.keyCode == 38) ? -1 : 1;

        if(itemActual < 0){
            itemActual = 0
        }else if(itemActual >= item.length){
            itemActual = item.length -1;
        }
        item[itemActual].classList.add('active');
        inputText.value = item[itemActual].textContent;
    }
})

item.forEach(li => {
    li.addEventListener('click', (e) => {
        inputText.value = e.currentTarget.textContent;
    })
})

function redirection(param){
    setTimeout(function(){
        window.location.href=`${param}`
    })
}















// const $form = document.querySelector('#form');
// const $input = document.querySelector('#input');
// const $sugestions = document.querySelector('#sugestions');
// import {categories} from './exports/data.js';
// asignarListeners()

// let sugerencias = [];

// function asignarListeners(){
//     $form.addEventListener('keyup', capturarData)
//     // $input.addEventListener('keyup', showElements)
// }

// function capturarData(e){
//     e.preventDefault()
//     if($input.value == ""){
//         console.log('No se permiten valores vacios');
//     }else{
//         filtrarElementos($input.value)
//     }
//     // $form.reset();
// }

// function filtrarElementos(param){
//     categories.map((elemento)=>{
//         let result = elemento.categories.filter(elemento => elemento.title.includes(param))
//         if(result.length >= 1){
//             for(let item of result){
//                 sugerencias.push(item)
//                 showElements(sugerencias)
//                 return;
//             }
//         }
//     })
// }

// function showElements(item){
//     console.log(item)
//     // $sugestions.innerHTML =  `<li><a href="${item.link}">${item.title}</a></li>`;
// }
