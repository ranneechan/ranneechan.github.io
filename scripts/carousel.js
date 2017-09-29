/* this javascript implements the slide change functionality and effects for carousel */

var slideIndex = 1;
var slideCounter = 0;
showSlides(slideIndex);

document.getElementsByClassName("prev")[0].onclick = goback;
function goback () {
	plusSlides(-1);
}

document.getElementsByClassName("next")[0].onclick = gonext;
function gonext () {
	plusSlides(1);
}

document.getElementsByClassName("dot")[0].addEventListener("click",function(){
	currentSlide(1);	
});
document.getElementsByClassName("dot")[1].addEventListener("click",function(){
	currentSlide(2);	
});
document.getElementsByClassName("dot")[2].addEventListener("click",function(){
	currentSlide(3);	
});
document.getElementsByClassName("dot")[3].addEventListener("click",function(){
	currentSlide(4);	
});
document.getElementsByClassName("dot")[4].addEventListener("click",function(){
	currentSlide(5);	
});
document.getElementsByClassName("dot")[5].addEventListener("click",function(){
	currentSlide(6);	
});
document.getElementsByClassName("dot")[6].addEventListener("click",function(){
	currentSlide(7);	
});
document.getElementsByClassName("dot")[7].addEventListener("click",function(){
	currentSlide(8);	
});
document.getElementsByClassName("dot")[8].addEventListener("click",function(){
	currentSlide(9);	
});
document.getElementsByClassName("dot")[9].addEventListener("click",function(){
	currentSlide(10);	
});
document.getElementsByClassName("dot")[10].addEventListener("click",function(){
	currentSlide(11);	
});
document.getElementsByClassName("dot")[11].addEventListener("click",function(){
	currentSlide(12);	
});


function plusSlides(n) {
	slideCounter = n;
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	slideCounter = 0;
	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slides2 = document.getElementsByClassName("desSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
	  document.getElementsByClassName("mySlides")[i].setAttribute("Id", "fading");
    slides[i].style.display = "none";
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slideCounter == 1) {
  	document.getElementsByClassName("mySlides")[slideIndex - 1].setAttribute("Id", "leftsliding");
  }
  else if(slideCounter == -1) {
	document.getElementsByClassName("mySlides")[slideIndex - 1].setAttribute("Id", "rightsliding");
  }
  
  slides[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}