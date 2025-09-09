function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
       menuMobile.classList.remove('open');
       document.querySelector('.icon').src = "images/menu1.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/menu22.png";
    }
}

function linhaMenu(){
   // Seleciona todos os itens com a classe "li"
   const menuLinhas = document.querySelectorAll(".li");

   menuLinhas.forEach(item => {
       item.addEventListener("click", () => {
           // Remove o destaque de todos os itens
           menuLinhas.forEach(el => el.classList.remove("ativo"));

           // Adiciona o destaque somente ao clicado
           item.classList.add("ativo");
       });
   });
}