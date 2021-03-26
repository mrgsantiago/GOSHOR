/* Форма ЗАБРОНИРОВАТЬ*/
const button = document.querySelector("button");
const form = document.querySelector("#blablabla");
const popup = document.querySelector(".popup");
var span = document.getElementsByClassName("close")[0];

button.addEventListener("click", () => {
  form.classList.add("open");
  popup.classList.add("popup_open");
});
span.onclick = function () {
  popup.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
/* ПРОКРУТКА*/
jQuery(document).ready(function () {
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset: 100,
  });
});
/* АНИМАЦИЯ БУРГЕРА*/
window.onload = function () {
  var img = document.querySelector(".forma > img");
  img.style.marginLeft = -img.width / 2 + "px";
  let x = document.querySelector("#myTopnav");
  document.querySelector("#menu").onclick = function () {
    x.classList.toggle("responsive");
    document.getElementById("text-logo").classList.toggle("hidden");
  };
};
/* СЛАЙДЕР наши работы*/
$(".slider").slick({
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 9000,
});

/* СЛАЙДЕР ОТЗЫВЫ*/
$(".sl").slick({
  arrows: true,
  adaptiveHeight: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 9000,
});

/* БУРГЕР*/
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
