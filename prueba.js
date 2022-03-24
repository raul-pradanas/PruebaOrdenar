let numerosImpares = [5, 3, 2, 8, 1, 4, 0];

function ordenar(listaNumeros){
		listaFinal= listaNumeros;
    
    listaAux = []; 
    for(let i = 0; i<listaNumeros.length ; i++){
        if(listaNumeros[i]%2 != 0){
            listaAux.push(listaNumeros[i]);
        }
    }

    listaAux.sort();
    let contador = 0;
    for(let j=0; j<listaNumeros.length;j++){
        if(listaNumeros[j]%2 != 0){
            listaFinal.splice(j,1,listaAux[contador]);
            contador++;
        }
    }
    return listaFinal;
}

console.log(ordenar(numerosImpares));