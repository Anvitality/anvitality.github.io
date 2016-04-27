$(document).ready(function() {


$("#twitter-icon").hover(function() {
  $("#twitter-icon").fadeOut("slow");
}, function() {
    $("#twitter-icon").fadeIn("slow");
});

$("#facebook-icon").hover(function() {
  $("#facebook-icon").fadeOut("slow");
}, function() {
    $("#facebook-icon").fadeIn("slow");
});

$("#email-icon").hover(function() {
  $("#email-icon").fadeOut("slow");
}, function() {
    $("#email-icon").fadeIn("slow");
});

$("a").click(function() {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });

});
