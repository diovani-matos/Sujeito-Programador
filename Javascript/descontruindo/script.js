
// descontruindo objetos e arrays

let pessoa = {
    nome: 'Diovani',
    idade: 30,
    cargo: 'Programador FullStack',
    hobbie: 'Jogos eletrônicos'
};


// let nome = 'Janice'

// const { nome:nomePessoa, cargo, hobbie} = pessoa; // pode-se renomear uma propriedade

// // nesse exemplo mudei a chave nome do obj para nomePessoa, pois ja existia uma variavel nome criada
// // PS: só renomeia apenas a desconstrução para poder utilizar, não renomeia a chave original dentro do objeto

// console.log(nomePessoa);
// console.log(cargo);
// console.log(hobbie);


// DESCONTRUINDO ARRAY =============================

let lista = ['Diovani', 'Janice', 'Miguel'];

// let {0:primeiro, 2:miguel} = lista; <--- semelhante ao obj, aqui passamos o index (posição) e o nome que queremos dar para aquela variavel

// console.log(primeiro);
// console.log(miguel);

let [primeironome, segundonome] = lista; // <--- ja nesse modo é pego em ordem, o primeiro parametro pega o primeiro elemento do array, o segundo, o segundo elemento e assim sucessivamente


console.log(primeironome);
console.log(segundonome);