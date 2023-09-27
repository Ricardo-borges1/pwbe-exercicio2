const readline = require('readline');
const notasModule = require('./modulos/calculos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMediasEscolares() {
    notasModule.obterRelatorio(rl);
}

calcularMediasEscolares();