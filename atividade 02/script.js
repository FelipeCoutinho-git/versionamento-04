let nomes = [];
let sexos = [];
let salarios = [];

for (let i = 0; i < 5; i++) {
    nomes.push(prompt("Digite o nome do funcionário " + (i + 1) + ":"));
    sexos.push(prompt("Digite o sexo do funcionário " + (i + 1) + ":"));
    salarios.push(parseFloat(prompt("Digite o salário do funcionário " + (i + 1) + ":")));
}

alert("Funcionárias mulheres que ganham mais de R$5 mil:");
for (let i = 0; i < 5; i++) {
    if (sexos[i] === "F" && salarios[i] > 5000) {
        alert("Nome: " + nomes[i] + ", Sexo: " + sexos[i] + ", Salário: R$" + salarios[i].toFixed(2));
    }
}
