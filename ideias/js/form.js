const formulario = document.querySelector(".formphp");

function formularioEnviado(resposta) {
  resposta.json().then((data) => {
    if (resposta.ok && data.status === "success") {
      formulario.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; color: #262626; background: #fff;'><span style='color: #236E45;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";

      const linkDownload = document.createElement("a");
      linkDownload.href = "/img/ebook.pdf";
      linkDownload.download = "ebook.pdf";
      linkDownload.click();
    } else {
      formulario.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; color: #262626; background: #fff;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: davi.luz@otfin.com.br</p>";
    }
  });
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "ENVIANDO";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
