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
  document.getElementById("hamburguerMenu").classList.toggle("fadeToRight");
  
  
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
    content2.classList.remove('fadeIn');
  
    console.log(radio1.checked);
  } else if (radio2.checked) {
    content2.classList.toggle("hidden");
    content1.classList.toggle("hidden");
    content1.classList.remove('fadeIn');
    content2.classList.toggle('fadeIn');
    console.log(radio2.checked);
  }
}, false);


//AJAX VALIDATION 

$(document).ready(function() {
  var delay = 2000;
  $('.btn-default').click(function(e){
  e.preventDefault();
  var name = $('#name').val();
  if(name == ''){
  $('.message_box').html(
  '<span style="color:red;">Enter Your Name!</span>'
  );
  $('#name').focus();
  return false;
  }
   
  var email = $('#email').val();
  if(email == ''){
  $('.message_box').html(
  '<span style="color:red;">Enter Email Address!</span>'
  );
  $('#email').focus();
  return false;
  }
  if( $("#email").val()!='' ){
  if( !isValidEmailAddress( $("#email").val() ) ){
  $('.message_box').html(
  '<span style="color:red;">Provided email address is incorrect!</span>'
  );
  $('#email').focus();
  return false;
  }
  }
     
  var message = $('#message').val();
  if(message == ''){
  $('.message_box').html(
  '<span style="color:red;">Enter Your Message Here!</span>'
  );
  $('#message').focus();
     return false;
  }	
         
  $.ajax
  ({
  type: "POST",
  url: "form.php",
  data: "name="+name+"&email="+email+"&message="+message+"&phone="+phone,
  beforeSend: function() {
  $('.message_box').html(
  '<img src="Loader.gif" width="25" height="25"/>'
  );
  },		 
  success: function(data)
  {
  setTimeout(function() {
  $('.message_box').html(data);
  }, delay);
  }
  });
  });
     
});