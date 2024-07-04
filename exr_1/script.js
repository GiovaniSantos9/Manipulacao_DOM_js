const el = document.getElementById('paragrafo')
const modificar = document.getElementById('button')

modificar.addEventListener("click", () => {
    el.classList.toggle('cor');
})