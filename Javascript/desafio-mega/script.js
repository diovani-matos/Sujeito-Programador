// Crie uma função que espere como argumento um número e esse numero precisa ser de 6 a 9 caso seja um numero menor que 6 ou maior que 9 essa função deverá retornar um array vazio e um aviso no console que nao é possivel usar esse numero.

// Dentro da função voce devera pegar o numero recebido como argumento e gerar uma lista de numeros aleatorios com base no tamanho do argumento, exemploo se o usuario mandou o numero 6 voce devera gerar uma lista de numeros contendo 6 numeros aleatorios sem repetir e os numeros gerados precisam ser entre 1 e 60.

// E no final devera retornar uma lista com os numeros gerados.

function gerarNumerosMega(qtdNumeros){
    if(qtdNumeros < 6 || qtdNumeros > 9) {
        console.log('Apenas números de 6 até 9');
        return [];
    }

    const numeros = [];

    // enquanto o comprimento de numeros for menor que a qtdNumeros faz a ação
    while(numeros.length < qtdNumeros){
        const numeroAleatorio = Math.floor(Math.random() * 60) +1; // floor para numero inteiro, multiplicado 60 e + 1 para começar em 1 e ir ate 60

        // negação, para verificar se o numero ja existe dentro do array e então sortear outro, para nao repetir
        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio) // para adicionar o numero ao final do array
        }

        return numeros;
    }
}

const numeroSorteador = gerarNumerosMega(7)
console.log(numeroSorteador);