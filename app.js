import {industriaT, iluminacionT, conductoresT, terminalesT, normalizadosT, instrumentosT, aereoT, emergenciaT, armadosBauhaus, herramientasT, morceteriaT} from './exports/data.js';

const products = [...industriaT, ...iluminacionT, ...conductoresT, ...terminalesT, ...normalizadosT, ...instrumentosT, ...aereoT, ...emergenciaT, ...armadosBauhaus, ...morceteriaT]

console.log(iluminacionT[0].categories)


function filtrar(param){
    const results = iluminacionT.filter((categoria, i) => categoria.title.includes(param));
    for(let result of results){
        console.log(result)
    }
}
filtrar('plaf')



