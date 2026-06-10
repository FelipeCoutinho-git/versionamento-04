let idades = [];

for (let i = 0; i < 4; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades.push(idade);
}
let maiorIdade = idades[0];
let posicaoMaiorIdade = 0;
for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaiorIdade = i;
    }
}

alert("A maior idade digitada foi: " + maiorIdade);
alert("A posição da maior idade digitada foi: " + (posicaoMaiorIdade + 1));
