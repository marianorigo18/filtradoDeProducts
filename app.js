import {products} from './exports/data.js'

/*function filtrar(param){
    for(let categoria of topic){
        let encontrado = categoria.title.includes(param)
        if(encontrado){
            console.log(categoria)
        }
    }
}*/

function filtrar(param){
    const results = products.filter(categoria => categoria.title.includes(param));
    for(let result of results){
        console.log(result)
    }
}
filtrar('tensor')



