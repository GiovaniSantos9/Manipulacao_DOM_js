document.getElementById('meuBotao').addEventListener('click', function() {
    var novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    document.getElementById('minhaLista').appendChild(novoItem);
});

document.getElementById('minhaLista').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
