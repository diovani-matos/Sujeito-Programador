
// MAP -- percorrer um array
// funiona parecido com um loop, ele roda por todo o array e devolve o item e o index

// let nomes = ['Diovani', 'Janice', 'Miguel'];

// nomes.map((item, index) => {
//     console.log(`Passando o item: ${item} que está na posição ${index}`)
// })



//--------------------------------------

// REDUCE -- reduz um array

// let numeros = [2, 4, 6, 8];

// let total = numeros.reduce((acumulador, numero, indice, original)=>{
//     console.log(`${acumulador} - total até o momento`);
//     console.log(`${numero} - valor atual / proximo valor a ser somado junto ao acumulador`);
//     console.log(`${indice} - indice atual`);
//     console.log(`${original} - array original`);
//     console.log('========================')

//     return acumulador += numero; // para somar o numero que ele está com o proximo
// })  

// console.log(`A soma total dos números é ${total}`)



//--------------------------------------

// FIND ---- para fazer uma busca no array, se ele encontrar o que esta buscando ele devolve esse mesmo resultado, se tiver varios resultados iguais ele devolve o primeiro que for encontrado


// let lista = ['Diovani', 30, 'Janice', 24, 'Miguel', 2];

// let busca = lista.find((item)=>{
//     if(item === 'Carlos') {
//         return console.log('O item foi encontrado')
//     } else {
//         console.log('Item não encontrado')
//     }
// })


//--------------------------------------

// FILTER -- serve para filtrar algo dentro do array, diferente do find que retorna apenas o primeiro item que ele encontrar, o filter retorna todos os itens que ele encontrar com base na condição

// nesse exemplo vai buscar o item que tem tamanho maior ou igual a 7, no caso Diovani e Isadora apenas

let palavras = ['Diovani', 'Janice', 'Miguel', 'Bruno', 'Isadora'];

let resultado = palavras.filter((item)=>{
    return item.length >= 7; 
})

console.log(resultado)
