import {topic} from './exports/data.js'

function filtrar(param){
    for(let categoria of topic){
        let encontrado = categoria.title.includes(param)
        if(encontrado){
            console.log(categoria)
        }
    }
}
filtrar('con')

