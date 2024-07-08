document.getElementById('meuBotao').addEventListener('click', function() {
    var texto = document.getElementById('meuInput').value;
    document.getElementById('meuParagrafo').textContent = texto;
});