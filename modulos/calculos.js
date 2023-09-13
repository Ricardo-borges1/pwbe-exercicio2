
function calcularMedia(notas) {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota >= 0 && nota <= 100) {
            somaNotas += nota;
        } else {
            console.log('Erro: As notas devem estar entre 0 e 100.');
        }
    }

    return somaNotas / notas.length;
}


function verificarStatus(media) {
    if (media >= 70) {
        return "aprovado";
    } else if (media >= 50 && media < 70) {
        return "exame";
    } else {
        return "reprovado";
    }
}


function verificarStatusExame(media, notaExame) {
    const novaMedia = (media + notaExame) / 2;
    if (novaMedia >= 60) {
        return "aprovado";
    } else {
        return "reprovado";
    }
}

module.exports = {
    calcularMedia,
    verificarStatus
}