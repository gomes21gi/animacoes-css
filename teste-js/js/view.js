const views = document.querySelectorAll(".view");

function checkViews() {
  views.forEach((view) => {
    const viewRect = view.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (
      viewRect.top <= windowHeight / 2 &&
      viewRect.bottom >= windowHeight / 2
    ) {
      const viewRect = view.getBoundingClientRect();
      var x = viewRect.right - viewRect.left;
      var y = viewRect.bottom - viewRect.top;
      view.style.boxShadow = `${x + 8}px 0 0px 0 var(--main) inset`;
      view.style.color = "var(--light)";
      view.style.padding = "0 4px";
    }
  });
}

checkViews();

window.addEventListener("scroll", checkViews);
