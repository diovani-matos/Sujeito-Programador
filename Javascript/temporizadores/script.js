// setInterval = executa infinitamente // para parar um setInterval é so colocar ele em uma variavel e usar o clearInterval() com no nome da variavel

// function acao(){
//     document.write('Executando <br/>')
// }

// var timer = setInterval(() => {
//     document.write('Executando <br/>'); // aqui nesse exemplo usando uma função anônima!
// }, 1000)

// clearInterval(timer)



// setTimeout -- executa apenas uma vez 

// setTimeout(acao, 3000) // espera 3s e executa a acao apenas uma vez e para

setTimeout(() => {
    document.write('Executou depois de 3 segundos')
}, 3000)