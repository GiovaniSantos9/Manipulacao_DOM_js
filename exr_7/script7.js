document.getElementById('meuBotao').addEventListener('click', function() {
    var img = document.getElementById('minhaImagem');
    if (img.src.includes('cms.jpg')) {
        img.src = 'OIP.jpg';
    } else {
        img.src = 'cms.jpg';
    }
});