document.getElementsByClassName("indicator")[0].onclick = s_history;
function s_history(){
	initScroll("history");
	return false;
}

document.getElementsByClassName("indicator")[1].onclick = s_general_rules;
function s_general_rules(){
	initScroll("general_rules");
	return false;
}

document.getElementsByClassName("indicator")[2].onclick = s_japanese_rules;
function s_japanese_rules(){
	initScroll("japanese_rules");
	return false;
}

document.getElementsByClassName("indicator")[3].onclick = s_yaku;
function s_yaku(){
	initScroll("yaku");
	return false;
}

document.getElementsByClassName("indicator")[4].onclick = s_score;
function s_score(){
	initScroll("score");
	return false;
}

document.getElementsByClassName("indicator")[5].onclick = s_ending;
function s_ending(){
	initScroll("ending");
	return false;
}

document.getElementsByClassName("indicator")[6].onclick = s_anime;
function s_anime(){
	initScroll("anime");
	return false;
}

var marginY = 0;
var destination = 0;
var speed = 5;
var scroller = null;

function initScroll(elementId) {
  marginY = window.pageYOffset;
  destination = document.getElementById(elementId).offsetTop - 70;
  if (elementId == "anime") {
    destination = destination - 45;
  }
  scroller = setTimeout(function() {
    initScrollRecursion(elementId);
  }, 1);

  if (marginY < destination) {
    marginY = marginY + speed;
    if (marginY >= destination) {
      clearTimeout(scroller);
    }
  } else if (marginY > destination) {
    marginY = marginY - speed;
    if (marginY <= destination) {
      clearTimeout(scroller);
    }
  }

  window.scroll(0, marginY);
}

function initScrollRecursion(elementId) {
  scroller = setTimeout(function() {
    initScrollRecursion(elementId);
  }, 1);

  if (marginY < destination) {
    marginY = marginY + speed;
    if (marginY >= destination) {
      clearTimeout(scroller);
    }
  } else if (marginY > destination) {
    marginY = marginY - speed;
    if (marginY <= destination) {
      clearTimeout(scroller);
    }
  }

  window.scroll(0, marginY);
}