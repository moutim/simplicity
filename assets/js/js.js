const botaoMenu = document.querySelector(".icone")
const menuHTML = document.querySelector(".menu")


botaoMenu.addEventListener("click", abrir_fechar)

function abrir_fechar (event){
    event.preventDefault();
    menuHTML.classList.toggle("abrir-menu")

    if(menuHTML.classList.contains("abrir-menu")){
        botaoMenu.innerHTML = "fechar &times;"
    } else {
        botaoMenu.innerHTML = `menu &equiv;`
    }
}

// contains verifica se o conteudo tem a classe especificada
// classList.contains()