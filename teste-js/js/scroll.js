// var $animation_element = $(".hidden");
// var $window = $(window);

// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = window_height + window_top_position;

//   $.each($animation_element, function () {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = element_height + element_top_position;

//     if (
//       element_bottom_position >= window_top_position &&
//       element_top_position <= window_bottom_position
//     ) {
//       $element.addClass("in-view");
//     } else {
//       $element.removeClass("in-view");
//     }
//   });
// }

// $window.on("scroll resize", check_if_in_view);
// $window.trigger("scroll");

window.addEventListener("scroll", function () {
  const image = document.getElementById("image");
  const scrollY = window.scrollY; // Posição da rolagem

  // Defina a opacidade da imagem com base no scroll
  let opacity = scrollY / 500; // A imagem vai aparecendo à medida que você rola
  if (opacity > 1) opacity = 1; // Limite da opacidade (máximo de 1)

  // Defina a escala da imagem com base no scroll
  let scale = 0.4 + scrollY / 1000; // A imagem aumenta gradualmente
  if (scale > 3) scale = 3; // Limite máximo de aumento (2x)

  // Aplica a opacidade e transformação de escala
  image.style.opacity = opacity;
  image.style.transform = `scale(${scale})`;
});
