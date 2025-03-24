// Carregar dados do localStorage e atualizar as listas
function carregarDados() {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const vendas = JSON.parse(localStorage.getItem('vendas')) || [];

    // Mostrar funcionários
    const listaFuncionarios = document.getElementById('listaFuncionarios');
    listaFuncionarios.innerHTML = '';
    funcionarios.forEach(f => {
        listaFuncionarios.innerHTML += `<li class="list-group-item">${f.nome} (${f.cargo})</li>`;
    });

    // Mostrar produtos
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';
    produtos.forEach(p => {
        listaProdutos.innerHTML += `<li class="list-group-item">${p.nome} - Qtd: ${p.quantidade} - R$${p.preco}</li>`;
    });

    // Mostrar vendas
    const listaVendas = document.getElementById('listaVendas');
    listaVendas.innerHTML = '';
    vendas.forEach(v => {
        listaVendas.innerHTML += `<li class="list-group-item">${v.funcionario} - ${v.produto} - Qtd: ${v.quantidade} - Total: R$${v.total}</li>`;
    });

    // Carregar selects de funcionários e produtos na página de vendas
    if (document.getElementById('funcionarioVenda')) {
        const funcionarioVenda = document.getElementById('funcionarioVenda');
        funcionarioVenda.innerHTML = '<option value="">Selecione Funcionário</option>';
        funcionarios.forEach(f => {
            funcionarioVenda.innerHTML += `<option value="${f.id}">${f.nome}</option>`;
        });

        const produtoVenda = document.getElementById('produtoVenda');
        produtoVenda.innerHTML = '<option value="">Selecione Produto</option>';
        produtos.forEach(p => {
            produtoVenda.innerHTML += `<option value="${p.nome}">${p.nome} - Estoque: ${p.quantidade}</option>`;
        });
    }
}

// Salvar dados no localStorage
function salvarDados() {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const vendas = JSON.parse(localStorage.getItem('vendas')) || [];
    
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('vendas', JSON.stringify(vendas));
}

// Função de cadastro de funcionário
const formFuncionario = document.getElementById('formFuncionario');
if (formFuncionario) {
    formFuncionario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const cargo = document.getElementById('cargo').value;
        const id = document.getElementById('idFuncionario').value;

        if (!nome || !cargo || !id) {
            alert('Todos os campos são obrigatórios');
            return;
        }

        const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
        funcionarios.push({ nome, cargo, id });
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

        carregarDados();
        formFuncionario.reset();
    });
}

// Função de cadastro de produto
const formProduto = document.getElementById('formProduto');
if (formProduto) {
    formProduto.addEventListener('submit', function (e) {
        e.preventDefault();

        const nomeProduto = document.getElementById('nomeProduto').value;
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const preco = parseFloat(document.getElementById('preco').value);

        if (!nomeProduto || isNaN(quantidade) || isNaN(preco)) {
            alert('Todos os campos são obrigatórios e as quantidades e preços devem ser números válidos');
            return;
        }

        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push({ nome: nomeProduto, quantidade, preco });
        localStorage.setItem('produtos', JSON.stringify(produtos));

        carregarDados();
        formProduto.reset();
    });
}

// Função de registro de venda
const formVenda = document.getElementById('formVenda');
if (formVenda) {
    formVenda.addEventListener('submit', function (e) {
        e.preventDefault();

        const funcionarioId = document.getElementById('funcionarioVenda').value;
        const produtoNome = document.getElementById('produtoVenda').value;
        const quantidadeVenda = parseInt(document.getElementById('quantidadeVenda').value);

        if (!funcionarioId || !produtoNome || isNaN(quantidadeVenda)) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        const funcionario = funcionarios.find(f => f.id === funcionarioId);
        const produto = produtos.find(p => p.nome === produtoNome);

        if (produto && produto.quantidade >= quantidadeVenda) {
            produto.quantidade -= quantidadeVenda;
            const total = produto.preco * quantidadeVenda;

            const vendas = JSON.parse(localStorage.getItem('vendas')) || [];
            vendas.push({ funcionario: funcionario.nome, produto: produto.nome, quantidade: quantidadeVenda, total });

            localStorage.setItem('produtos', JSON.stringify(produtos));
            localStorage.setItem('vendas', JSON.stringify(vendas));

            carregarDados();
        } else {
            alert("Estoque insuficiente!");
        }

        formVenda.reset();
    });
}

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDados);
