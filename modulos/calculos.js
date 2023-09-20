function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
    return soma / notas.length
}

function validarNotas(notas) {
    return notas.every((nota) => !isNaN(nota) && nota >= 0 && nota <= 100)
}

function mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media, mediaFinal) {
    console.log(`
    Relatório do aluno:
    O ${sexoAluno === 'F' ? 'aluna' : 'aluno'} ${aluno} foi ${status} na disciplina ${disciplina}.
    Curso: ${curso}
    Professor${sexoProfessor === 'F' ? 'a' : ''}: ${professor}
    Notas do aluno: ${notas.join(', ')}
    Nota do Exame: ${notaExame}
    Média Final: ${media}
    Média final do Exame: ${mediaFinal}
  `)
}

function obterRelatorio(rl) {
    rl.question('Nome do aluno: ', (aluno) => {
        rl.question('Nome do professor: ', (professor) => {
            rl.question('Sexo do professor (M/F): ', (sexoProfessor) => {
            rl.question('Sexo do aluno (M/F): ', (sexoAluno) => {
            rl.question('Nome do curso: ', (curso) => {
            rl.question('Nome da disciplina: ', (disciplina) => {
            rl.question('Digite as 4 notas separadas por uma vírgula ', (notasInput) => {
           const notas = notasInput.split(',').map((nota) => parseFloat(nota))

           if (!validarNotas(notas)) {
          console.log('Erro: as notas podem ser apenas de 0 a 100).')
          rl.close()
          return
          }

          const media = calcularMedia(notas)
          let status = ''

        if (media >= 70) {
        status = 'aprovado'
         } else if (media < 50) {
         tatus = 'reprovado'
       } else {
         status = 'em exame'

     rl.question('Digite a nota do exame: ', (notaExame) => {
      const mediaFinal = (parseFloat(notaExame) + media) / 2
    if (mediaFinal >= 60) {
     status = 'aprovado em exame'
    } else {
     status = 'reprovado no exame'
    }

   mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media, mediaFinal)
    rl.close()
   })

     return
    }

  mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, '', media, '')
    rl.close()
           })
       })
       })
       })
   })
        })
    })
}

module.exports = {
    calcularMedia,
    validarNotas,
    mostrarRelatorio,
    obterRelatorio,
}