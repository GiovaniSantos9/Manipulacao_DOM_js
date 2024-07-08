var contador = 0;
        document.getElementById('meuBotao').addEventListener('click', function() {
            contador++;
            document.getElementById('meuParagrafo').textContent = contador;
        });