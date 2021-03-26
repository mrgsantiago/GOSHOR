/* БУРГЕР*/
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(function () {
  $(".header_burger").on("click", function () {
    $("header_list").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});
/* ПРОКРУТКА*/
jQuery(document).ready(function () {
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset: 100,
  });
});

/* АНИМАЦИЯ ФОТОСТУДИИ*/
const wrapper = document.querySelector(".descr-animate");
const text = document.querySelector(".descr");
let textCont = text.textContent;
for (let i = 0; i < textCont.length; i++) {
  (function (i) {
    setTimeout(function () {
      let texts = document.createTextNode(textCont[i]);
      let span = document.createElement("span");
      span.appendChild(texts);
      span.classList.add("txt-animate");
      wrapper.appendChild(span);
    }, 125 * i);
  })(i);
}

/* СЛАЙДЕР*/
$(".sl").slick({
  arrows: true,
  dots: true,
  adaptiveHeight: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 6000,
});

/* Форма ЗАБРОНИРОВАТЬ*/
const button = document.querySelector("button");
const form = document.querySelector(" #blablabla");
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

/* ЗАГРУЗКА*/

setTimeout(() => preloader(), 2000);
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
$(".slow").slick({
  arrows: true,
  adaptiveHeight: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 9000,
});
