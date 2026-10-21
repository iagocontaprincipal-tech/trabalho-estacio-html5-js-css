console.log('app.js carregado');

const totalCarrinho = 250;
const aviso = document.querySelector("#desconto");

if (totalCarrinho >= 200) {
    aviso.textContent = "10% de desconto para mulher solteira";
} else {
    aviso.textContent = "Frete: R$ 20";
}

const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});

const form = document.querySelector("#contato");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (nome.value === "" || email.value === "") {
        erro.textContent = "Preencha o nome completo e o e-mail.";
        erro.style.color = "red";
    } else {
        nome.value = "";
        email.value = "";
    }
});