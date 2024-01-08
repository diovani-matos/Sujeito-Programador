// SPREAD OPERATOR - SERVE PARA JUNTAR INFORMAÇÕES DE DIFERENTES ARRAYS, OBJETOS

// let primeiros = [1, 2, 3];

// let segundos = [...primeiros, 10, 20, 30];

// console.log(segundos);

// let pessoa = {
//     nome: 'Diovani',
//     idade: 30,
//     cargo: 'FullStack Developer'
// }

// let novaPessoa = {
//     ...pessoa,
//     status: 'Ativo',
//     cidade: 'Criciúma SC'
// }

// console.log(novaPessoa);

function newUser(info){
    let data = {
        ...info,
        status: 'Ativo',
        codigo: '123123',
        inicio: '05/01/2024'
    }

    console.log(dados);
}

newUser({nome: 'Diovani', sobrenome: 'Matos', cargo: 'Dev'})