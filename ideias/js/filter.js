function blurFunction() {
  document.getElementById("capi").style.filter = "blur(20px)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}

function brightnessFunction() {
  document.getElementById("capi").style.filter = "brightness(0%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}

function contrastFunction() {
  document.getElementById("capi").style.filter = "contrast(0%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function grayscaleFunction() {
  document.getElementById("capi").style.filter = "Grayscale(100%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function hueFunction() {
  document.getElementById("capi").style.filter = "hue-rotate(3.142rad)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function invertFunction() {
  document.getElementById("capi").style.filter = "invert(100%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function opacityFunction() {
  document.getElementById("capi").style.filter = "Opacity(0%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function saturateFunction() {
  document.getElementById("capi").style.filter = "saturate(200%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}
function sepiaFunction() {
  document.getElementById("capi").style.filter = "sepia(100%)";
  document.getElementById("capi").addEventListener("transitionend", () => {
    document.getElementById("capi").style.filter = "none";
  });
  document.getElementById("capi").style.transition = "filter 5s";
}

// function filter() {
//   document.getElementById("capivara").style.filter = "blur(100%)";
//   document.getElementById("capivara").style.filter = "brightness(100%)";
//   document.getElementById("capivara").style.filter = "contrast(100%)";
//   document.getElementById("capivara").style.filter = "grayscale(100%)";
//   document.getElementById("capivara").style.filter = "hue-rotate(100%)";
//   document.getElementById("capivara").style.filter = "invert(100%)";
//   document.getElementById("capivara").style.filter = "opacity(100%)";
//   document.getElementById("capivara").style.filter = "saturate(100%)";
//   document.getElementById("capivara").style.filter = "sepia(100%)";
// }
