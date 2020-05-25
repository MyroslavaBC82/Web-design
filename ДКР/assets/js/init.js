document.addEventListener("DOMContentLoaded", function (event) {
  const burger = document.getElementsByClassName("burger")[0];
  const spans = burger.getElementsByTagName("span");
  const nav = document.getElementsByTagName("nav")[0];

  burger.addEventListener("click", function () {
    if (!spans[0].style.length) {
      spans[0].style = "transform: rotate(45deg)";
      spans[1].style = "opacity: 0;";
      spans[2].style = "transform: rotate(-45deg)";
      nav.className = "shown";
    } else {
      for (let span of spans) {
        span.style = "";
      }
      nav.className = "";
    }
  });
  window.onresize = function () {
    if (window.matchMedia("(min-width: 1007px)").matches) {
      for (let span of spans) {
        span.style = "";
      }
      nav.className = "";
    }
  };
  document.getElementsByClassName("modalbackground")[0].onclick = function () {
    window.location.hash = "";
  };
});
