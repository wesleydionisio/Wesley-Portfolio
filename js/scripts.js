window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 8) {
    document.getElementById("header").classList.add("headerShrink");
  } else {
    document.getElementById("header").classList.remove("headerShrink");
  }
}

$(".bt-menu").on("click", function (e) {
  e.preventDefault();
  $("body").toggleClass("menu-open");
  document.getElementById("hamburguerMenu").classList.toggle("hidden");
  document.getElementById("hamburguerMenu").classList.toggle("sideMenu");
});

let tabs = document.getElementById("contentSlider");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");


tabs.addEventListener("change", function () {
  if (radio1.checked) {
    content1.classList.toggle("hidden");
    content2.classList.toggle("hidden");
    content1.classList.toggle('fadeIn');
  
    console.log(radio1.checked);
  } else if (radio2.checked) {
    content2.classList.toggle("hidden");
    content1.classList.toggle("hidden");
    content2.classList.toggle('fadeIn');
    console.log(radio2.checked);
  }
}, false);

console.log("Uuu");
