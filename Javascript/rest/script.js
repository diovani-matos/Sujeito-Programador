
// Rest Operator -- recebe todos os parametros e adiciona em um array, util para quando nao sabe a quantidade de parametros

// function convidados(...nomes){ // se tirar os 3 pontos, ele passa apenas 1 parametro pq foi indicado apenas 1
//     console.log(nomes)
// }

// convidados('Diovani', 'janice', 'Miguel')


function dado(...numeros){
    // aqui ele pega a posição do numero que está como parametro da função e mostra qual numero esta naquela posição
    // se não ele poderia cair na primeira posição que seria 0, ou na posição 2 que seria o numero 3
    const numeroSorteado = Math.floor(Math.random() * numeros.length);

    console.log('O dado girou e caiu no número ' + numeros[numeroSorteado]);
}

dado(1, 2, 3, 4, 5, 6)