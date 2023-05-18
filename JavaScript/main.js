
const cabecalho = document.querySelector("#cabecalho")
const lateral = document.querySelector("#lateral")
const texto = document.querySelector("#container")
const icone = document.querySelector("#tema")

tema.addEventListener('click', ()=> {
    lateral.classList.toggle('dark')
    cabecalho.classList.toggle('dark')
    texto.classList.toggle('dark')
    icone.classList.toggle('dark')
    if(icone.classList.contains('dark')){
        icone.innerHTML = '<i class="icone fa-regular fa-sun"></i> <P>Day</p>'
    }else{
        icone.innerHTML = '<i class="icone fa-solid fa-moon"></i> <P>Nigth</p>'
    }
})
