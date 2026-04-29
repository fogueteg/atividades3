const turma = [

    { nome : "ronaldo",
      idade : 12,
      nota : [10,4,6]
    },
    { nome : "bernardo",
      idade : 10,
      nota : [10,7,8]
    },
    { nome : "arthur",
      idade : 11,
      nota : [10,7,5]
    }
]
function listarNomes(turma) {
  let i = 0;
  while (i < turma.length) {
    console.log(turma[i].nome);
    i++;
  }
}
function calcularMedia(notas) {
    if (!notas,notas.length === 0) {
        return 0;
    }

    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}
turma.forEach(aluno => {
    const media = calcularMedia(aluno.nota);
    if (media < 7)
    console.log("Reprovado X")
    if (media >= 7)
    console.log("Aprovado ✔")
    console.log("Aluno: " + aluno.nome + " " + "Media: " + media);
});
function adicionarAluno(nome, idade, notas) {
    const novoAluno = {
        nome: nome,
        idade: idade,
        nota: notas,
    };

    turma.push(novoAluno);
}
/*
function buscarAluno(nome) {
    let encontrado = false;

    for (let i = 0; i < turma.length; i++) {
        if (turma[i].nome.toLowerCase() === nome.toLowerCase()) {
            encontrado = true;
            break; }
    {
    if (encontrado) {
        console.log("Aluno encontrado na turma ✔");
    } else {
        console.log("Aluno não está na turma ❌");
    }}}}
        */
function encontrarMaisVelho(turma) {
  let maisVelho = turma[0];

  for (let i = 1; i < turma.length; i++) {
    if (turma[i].idade > maisVelho.idade) {
      maisVelho = turma[i];
}}
  return maisVelho;
}
let resultado = encontrarMaisVelho(turma);

console.log("Aluno mais velho:", resultado.nome);
/*
turma[0].nome = "vitoria";
console.log(turma)
*/
function encontrarmedia(turma) {
  let somaMedias = 0;

  for (let i = 0; i < turma.length; i++) {
    let mediaAluno = calcularMedia(turma[i].nota);
    somaMedias += mediaAluno;
  }

  let mediaGeral = somaMedias / turma.length;

  console.log(mediaGeral, "é a média da turma");
}
encontrarmedia(turma);