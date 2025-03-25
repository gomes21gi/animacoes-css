const btnMassa = document.getElementById("massa");
const btnRisoto = document.getElementById("risoto");
const btnPizza = document.getElementById("pizza");
const btnDoce = document.getElementById("doce");

const massas = document.querySelector(".massas");
const risotos = document.querySelector(".risotos");
const pizzas = document.querySelector(".pizzas");
const pizzadoces = document.querySelector(".pizzadoces");

btnMassa.addEventListener("click", () => {
  massas.classList.add("active");
  risotos.classList.remove("active");
  pizzas.classList.remove("active");
  pizzadoces.classList.remove("active");

  btnMassa.classList.add("active");
  btnRisoto.classList.remove("active");
  btnPizza.classList.remove("active");
  btnDoce.classList.remove("active");
});
btnRisoto.addEventListener("click", () => {
  massas.classList.remove("active");
  risotos.classList.add("active");
  pizzas.classList.remove("active");
  pizzadoces.classList.remove("active");

  btnMassa.classList.remove("active");
  btnRisoto.classList.add("active");
  btnPizza.classList.remove("active");
  btnDoce.classList.remove("active");
});

btnPizza.addEventListener("click", () => {
  massas.classList.remove("active");
  risotos.classList.remove("active");
  pizzas.classList.add("active");
  pizzadoces.classList.remove("active");

  btnMassa.classList.remove("active");
  btnRisoto.classList.remove("active");
  btnPizza.classList.add("active");
  btnDoce.classList.remove("active");
});

btnDoce.addEventListener("click", () => {
  massas.classList.remove("active");
  risotos.classList.remove("active");
  pizzas.classList.remove("active");
  pizzadoces.classList.add("active");

  btnMassa.classList.remove("active");
  btnRisoto.classList.remove("active");
  btnPizza.classList.remove("active");
  btnDoce.classList.add("active");
});
