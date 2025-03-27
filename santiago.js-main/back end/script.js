function registrarAquisicao() {
    // Captura os valores dos campos do formulário
    const data = document.getElementById('data').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorUnitario = document.getElementById('valorUnitario').value;
    const localizacao = document.getElementById('localizacao').value;
    const metodoPagamento = document.getElementById('metodoPagamento').value;

    // Para fins de exemplo, vamos considerar uma quantidade fixa de 1
    const quantidade = 1;
    const valorTotal = (quantidade * valorUnitario).toFixed(2);

    // Adiciona uma nova linha à tabela de aquisições
    const tabela = document.getElementById('tabelaAquisicoes').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Insere os dados nas células da nova linha
    novaLinha.insertCell(0).innerText = data;
    novaLinha.insertCell(1).innerText = nomeProduto;
    novaLinha.insertCell(2).innerText = `R$ ${valorTotal}`;
    novaLinha.insertCell(3).innerText = localizacao;
    novaLinha.insertCell(4).innerText = metodoPagamento;

    // Limpa os campos do formulário após o registro
    document.getElementById('registroForm').reset();
}