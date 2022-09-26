window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 8) {
    document.getElementById("header").classList.add('headerShrink')
  } else {
    document.getElementById("header").classList.remove('headerShrink')
  }
}

$('.bt-menu').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('menu-open');
  document.getElementById('hamburguerMenu').classList.toggle('hidden')
  document.getElementById('hamburguerMenu').classList.toggle('sideMenu')

});


console.log("Uuu")

    