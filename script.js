function abrirPagina(pagina) {
    window.open(pagina, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {

    // Modo escuro
    const botao = document.getElementById("darkMode");

    if (botao) {
        botao.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

});

function enviarComentario() {

    const nome = document.getElementById("nomeComentario");
    const comentario = document.getElementById("textoComentario");
    const lista = document.getElementById("listaComentarios");

    if (!nome || !comentario || !lista) return;

    const nomeTexto = nome.value.trim();
    const comentarioTexto = comentario.value.trim();

    if (nomeTexto === "") {
        alert("Digite seu nome antes de enviar!");
        return;
    }

    if (comentarioTexto === "") {
        alert("Escreva um comentário antes de enviar!");
        return;
    }

    // Criar comentário
    const novoComentario = document.createElement("div");
    novoComentario.classList.add("comentario-item");

    const nomeElemento = document.createElement("h3");
    nomeElemento.textContent = nomeTexto;

    const textoElemento = document.createElement("p");
    textoElemento.textContent = comentarioTexto;

    novoComentario.appendChild(nomeElemento);
    novoComentario.appendChild(textoElemento);

    lista.appendChild(novoComentario);

    // Limpar campos
    nome.value = "";
    comentario.value = "";

    // Mensagem de confirmação
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    if (!mensagem || !contador) return;

    mensagem.classList.add("ativa");

    let tempo = 3;

    contador.textContent = "Fechando em " + tempo + "...";

    const intervalo = setInterval(() => {

        tempo--;

        if (tempo > 0) {

            contador.textContent = "Fechando em " + tempo + "...";

        } else {

            clearInterval(intervalo);
            mensagem.classList.remove("ativa");

        }

    }, 1000);

}