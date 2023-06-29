<!DOCTYPE html>
<html>
<head>
<title>Formulário de Registro</title>
<script>
    function processarFormulario() {
    // Obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Exibir os valores na console
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);

    // Você pode fazer mais operações com essas variáveis, como enviá-las para um servidor
}
</script>
</head>
<body>
<h2>Registro de Usuário</h2>

<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" required>

        <br><br>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required>

                <br><br>

                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" required>

                        <br><br>

                            <input type="button" value="Registrar" onclick="processarFormulario()">
</form>
</body>
</html>