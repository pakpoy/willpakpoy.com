var headtxt = '</will>';
var v = 0;
var x = 0;
var a = 0;
var txt = null;
var txtauthor = null;
var speed = 100;
var letters1 = 0;



$(document).ready(function(){
    startLoadingStuff();
});


function startLoadingStuff() {
	secondtypeWriter();
}

function secondtypeWriter() {
  if (x < headtxt.length) {
    document.getElementById("headtxt").innerHTML += headtxt.charAt(x);
    x++;
    setTimeout(secondtypeWriter, speed);
  }
	else if (x == headtxt.length) {
		loadAfterQuotes();

	}
}


function loadAfterQuotes() {

    setTimeout(function(){
    $(".fadeable").each(function(index) {
        $(this).delay(400*index).addClass('fading').animate({opacity: 1}, 1000);

    });}, 250);
}

var d = document.getElementsByClassName("imgcss");

function loadMore() {
    $("body").css("overflow", "hidden");
    document.getElementById('page2').style.display = "block";
    $('html, body').stop().animate({
        scrollTop: $(".page#page2").offset().top
    }, 1000);
    setTimeout(
      function()
      {
         $("#page1").hide();
         $("body").css("overflow", "visible");
    }, 1100);

}

function s2page(page) {
    $(".s2active").hide();
    $(".s2active").removeClass("s2active")
    $(page).show();
    $(page).addClass("s2active")
}
