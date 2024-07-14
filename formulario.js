
function enviarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('mensagem', mensagem);

    mostrarMensagemConfirmacao();

    return false; 
}

function mostrarMensagemConfirmacao() {
    var mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.classList.remove('hidden');

    setTimeout(function() {
        mensagemConfirmacao.classList.add('hidden');
    }, 5000); 
}