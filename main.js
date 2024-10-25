const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="imgs/happycat.png">';
const imgReprovado = '<img src="imgs/sadcat.png">';
const atividades = [];
const notas = [];
const labelAprovado = '<p id="resultadoFinal" class="aprovado">Aprovado</p>';
const labelReprovado = '<p id="resultadoFinal" class="reprovado">Reprovado</p>';
const notaMinima = parseFloat(prompt("Insira a nota média mínima final:")); 

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizarMed();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`${inputNomeAtividade.value} já foi adicionado às atividades`);
    } else {
        atividades.push(inputNomeAtividade.value); 
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMed() {
    const medFinal = calcMedia().toFixed(1);
    document.getElementById('medFinal').innerHTML = medFinal;
    document.getElementById('resultadoFinal').innerHTML = medFinal >= notaMinima ? labelAprovado : labelReprovado;
}

function calcMedia() {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    return somaNotas / notas.length;
}
