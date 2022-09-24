window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 8) {
    document.getElementById("header").classList.add('headerShrink')
  } else {
    document.getElementById("header").classList.remove('headerShrink')
  }
}
    console.log("Uuu")