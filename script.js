// Passo 1: O código abaixo espera o formulário ser "enviado" para começar a agir
document.getElementById('formContato').addEventListener('submit', function(event) {
    
    // Passo 2: Esse comando impede que a página recarregue sozinha quando clicamos no botão
    event.preventDefault();

    // Passo 3: Aqui o JavaScript vai lá no HTML de contato e pega o que foi digitado em cada caixinha
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Passo 4: Teste de validação - Se o nome OU o email OU a mensagem estiverem vazios...
    if (nome === "" || email === "" || mensagem === "") {
        // ... ele mostra esse aviso de erro
        alert("Ops! Por favor, preencha todos os campos do formulário.");
    } else {
        // Se estiver tudo preenchido, ele mostra essa mensagem de sucesso!
        alert("Obrigada, " + nome + "! Sua mensagem foi enviada com sucesso (simulação).");
        
        // Passo 5: Depois de enviar, ele limpa o formulário para ficar branquinho de novo
        this.reset();
    }
});

