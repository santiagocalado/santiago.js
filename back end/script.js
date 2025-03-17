<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
</head>
<body>
    <h1>Cadastro</h1>
    <input type="text" id="nome" placeholder="Nome">
    <input type="email" id="email" placeholder="Email">
    <input type="text" id="rg" placeholder="RG">
    <input type="text" id="cpf" placeholder="CPF">
    <input type="password" id="senha" placeholder="Senha">
    <button onclick="cadastrar()">Cadastrar</button>
    <p id="mensagem"></p>

    <script>
        function cadastrar() {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const rg = document.getElementById('rg').value;
            const cpf = document.getElementById('cpf').value;
            const senha = document.getElementById('senha').value;

            if (!nome || !email || !rg || !cpf || !senha) {
                document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos!';
                return;
            }

            document.getElementById('mensagem').textContent = `Cadastro realizado!\nNome: ${nome}\nEmail: ${email}`;
        }
    </script>
