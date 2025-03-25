function copiaCodigo() {
  let codigo = document.getElementById("codigo").innerText;
  let textarea = document.createElement("textarea");
  textarea.value = codigo;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Código copiado!");
}
