const el = document.getElementById('div')
const modificar = document.getElementById('button')

modificar.addEventListener("click", () => {
    el.classList.toggle('background');
})