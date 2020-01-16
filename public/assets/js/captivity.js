function middletypeWriter() {
  if (a < txt.length) {
    document.getElementById("coolstuff").innerHTML += txt.charAt(a);
    a++;
    setTimeout(middletypeWriter, speed);
  }
	else if (a == txt.length) {
		setTimeout(function(){ typeWriter();}, 500);

	}
}

function typeWriter() {
  if (v < txtauthor.length) {
    document.getElementById("quote-author").innerHTML += txtauthor.charAt(v);
    v++;
    setTimeout(typeWriter, speed);
  }
  else if (v == txtauthor.length) {
	loadAfterQuotes();

  }

}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    $('html, body').stop().animate({
        scrollTop: $("#more").offset().top
    }, 1000);
  }
}

function setHomeToMiddle() {
	var middle = document.getElementById('home-header').style;
	var willtxt = document.getElementById('headtxt').style;
	var coolstufftxt = document.getElementById('coolstuff').style;

	middle.margin = '0';
	middle.position = 'absolute';
	middle.top = '50%';
	middle.left = '50%';
	middle.marginRight = '-50%';
	middle.transform = 'translate(-50%, -50%)';

	willtxt.fontSize = '80px';
	coolstufftxt.fontSize = '30px';

}

function removeHomeToMiddle() {
	var middle = document.getElementById('home-header').style;
	var willtxt = document.getElementById('headtxt').style;
	var coolstufftxt = document.getElementById('coolstuff').style;

	middle.transition = 'top 1s linear';
	middle.margin = 'initial';
	middle.position = 'initial';
	middle.top = 'initial';
	middle.left = 'initial';
	middle.marginRight = 'initial';
	middle.transform = 'initial';

	willtxt.fontSize = '50px';
	coolstufftxt.fontSize = '20px';
}


var d = document.getElementsByClassName("imgcss");


	$.getJSON('https://api.quotable.io/random', function(data) {
	  txt = data.content;
	  txtauthor = '- ' + data.author;
	  startLoadingStuff();
	})
