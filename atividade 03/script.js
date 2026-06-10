let nomes = [];
let alturas = [];
let continuar = 1; // Variável de controle do laço (1 = Sim, 0 = Não)
let totalRegistros = 0; // Funciona como o tamanho dinâmico do vetor

// Coleta de dados indeterminada
while (continuar === 1) {
    nomes[totalRegistros] = prompt("Digite o nome da pessoa:");
    alturas[totalRegistros] = parseFloat(prompt("Digite a altura de " + nomes[totalRegistros] + " (ex: 1.75):"));

    totalRegistros++; // Incrementa o índice para a próxima posição

    // Pergunta de parada utilizando obrigatoriamente parseInt
    continuar = parseInt(prompt("Deseja continuar cadastrando?\n1 - SIM\n0 - NÃO"));
}
// Processamento manual para descobrir maior e menor valor
let maiorAltura = alturas[0];
let menorAltura = alturas[0];
let nomeMaior = nomes[0];
let nomeMenor = nomes[0];

for (let j = 1; j < totalRegistros; j++) {
    if (alturas[j] > maiorAltura) {
        maiorAltura = alturas[j];
        nomeMaior = nomes[j];
    }
    if (alturas[j] < menorAltura) {
        menorAltura = alturas[j];
        nomeMenor = nomes[j];
    }
}
// Exibição dos resultados acumulados
alert(
    "Resultados da Análise:\n\n" +
    "Maior altura: " + maiorAltura + "m (Pertence a: " + nomeMaior + ")\n" +
    "Menor altura: " + menorAltura + "m (Pertence a: " + nomeMenor + ")"
);