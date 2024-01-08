// DESAFIO 1 -- Crie uma lista de produtos

//  1-A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
//  2-Mostre no console quantos produtos tem nessa lista.
//  3-Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
//  4-Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
//  5-Remova o segundo item da sua lista.

// let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

// console.log(produtos); // 1- mostrando a lista no console
// console.log(produtos.length); // 2- mostrando a quantidade de itens na lista

// produtos.splice(2,1); // aqui remove o item "Mouse"
// console.log(produtos); // produtos sem o item removido

// let busca = produtos.find((item)=>{
//     if(item === 'Notebook') {
//         return console.log('O item foi encontrado no array')
//     } else {
//         console.log('O item não existe no array')
//     }
// })


// DESAFIO 2 ----------------

// CRIE UMA LISTA DE NUMEROS 1, 3, 5, 7, 0, 9

// 1- Ordene essa lista do menor para o maior.
// 2- Retire o primeiro numero desta lista.
// 3- Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

// let numeros = [1, 3, 5, 7, 0, 9];

// let numerosOrdenados = numeros.sort();

// console.log(numerosOrdenados);

// console.log(numerosOrdenados.shift()); // remove o primeiro numero da lista
// console.log(numerosOrdenados);

// console.log(numerosOrdenados.reverse());


// DESAFIO 3 -----------

// CRIE UMA STRONG QUE TENHA O DIA DE HOJE: 05/01/2024

// 1- Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

let diaCompleto = '05/01/2024';

let diaSeparado = diaCompleto.split('/');

let dia = diaSeparado[0];
let mes = diaSeparado[1];
let ano = diaSeparado[2];

console.log(`Esse é o dia ${dia}, esse é o mes ${mes} e esse é o ano ${ano}`);

