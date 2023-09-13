const readline = require('readline');
const { calcularMedia, verificarStatus } = require('./modulos/calculos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nome do aluno: ', (nomeAluno) => {
rl.question('Nome do professor: ', (nomeProfessor) => {
  rl.question('Sexo do aluno (M/F): ', (sexoAluno) => {
   rl.question('Sexo do professor (M/F): ', (sexoProfessor) => {
    rl.question('Nome do curso: ', (curso) => {
    rl.question('Nome da disciplina: ', (disciplina) => {
      const notas = [];
     const totalNotas = 4;
     let exame = 0;

    const obterNota = (contador) => {
     if (contador < totalNotas) {
    rl.question(`Nota ${contador + 1}: `, (nota) => {
     const notaNum = parseFloat(nota);
    if (!isNaN(notaNum)) {
    notas.push(notaNum);
     obterNota(contador + 1);
    } else {
    console.log('Erro: Insira um valor numérico para a nota.');
    rl.close();
     }
     });
    } else {
    const media = calcularMedia(notas);
     const status = verificarStatus(media);

     if (status === "de exame") {
      rl.question('Nota do exame: ', (notaExame) => {
      const notaExameNum = parseFloat(notaExame);
      if (!isNaN(notaExameNum)) {
       exame = notaExameNum;
         const novaMedia = (media + exame) / 2;
        const novoStatus = verificarStatus(novaMedia);
       exibirRelatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, curso, disciplina, notas, exame, media, novaMedia, novoStatus);
        } else {
       console.log('Erro: Insira um valor numérico para a nota do exame.');
        l.close();
         }
        });
        } else {
          exibirRelatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, curso, disciplina, notas, exame, media, status);
         }
         }
          };

         obterNota(0);
         });
             });
            });
        });
    });
});

function exibirRelatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, curso, disciplina, notas, exame, media, status) {
    const generoAluno = sexoAluno.toLowerCase() === "m" ? "aluno" : "aluna";
    const generoProfessor = sexoProfessor.toLowerCase() === "m" ? "professor" : "professora";
    const statusTexto = status === "aprovado" ? "aprovado" : status === "exame" ? "de exame" : "reprovado";

    console.log(`\nRelatório do ${generoAluno}:`);
    console.log(`O ${generoAluno} ${nomeAluno} foi ${statusTexto} na disciplina ${disciplina}.`);
    console.log(`Curso: ${curso}`);
    console.log(`${generoProfessor}: ${nomeProfessor}`);
    console.log(`Notas do ${generoAluno}: ${notas.join(', ')}`);
    if (status === "exame") {
        console.log(`Nota do Exame: ${exame}`);
        console.log(`Média final do Exame: ${((media + exame) / 2).toFixed(2)}`);
    } else {
        console.log(`Média Final: ${media.toFixed(2)}`);
    }

    rl.close();
}