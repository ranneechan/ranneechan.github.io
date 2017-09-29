var currentPosition = 0;
var checkpoint1 = document.getElementById('history').offsetTop - 105;
var checkpoint2 = document.getElementById('general_rules').offsetTop - 140;
var checkpoint3 = document.getElementById('japanese_rules').offsetTop - 140;
var checkpoint4 = document.getElementById('yaku').offsetTop - 140;
var checkpoint5 = document.getElementById('score').offsetTop - 140;
var checkpoint6 = document.getElementById('ending').offsetTop - 140;
var checkpoint7 = document.getElementById('anime').offsetTop - 175;
var checkpoint8 = document.getElementsByTagName('footer')[document.getElementsByTagName('footer').length - 1].offsetTop - 280;

function indicator() {
  currentPosition = window.pageYOffset;
  checkpoint1 = document.getElementById('history').offsetTop - 105;
  checkpoint2 = document.getElementById('general_rules').offsetTop - 140;
  checkpoint3 = document.getElementById('japanese_rules').offsetTop - 140;
  checkpoint4 = document.getElementById('yaku').offsetTop - 140;
  checkpoint5 = document.getElementById('score').offsetTop - 140;
  checkpoint6 = document.getElementById('ending').offsetTop - 140;
  checkpoint7 = document.getElementById('anime').offsetTop - 175;
  checkpoint8 = document.getElementsByTagName('footer')[document.getElementsByTagName('footer').length - 1].offsetTop - 280;
  if (window.pageYOffset <= checkpoint1 || window.pageYOffset > checkpoint8) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint1 && window.pageYOffset <= checkpoint2) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint2 && window.pageYOffset <= checkpoint3) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint3 && window.pageYOffset <= checkpoint4) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint4 && window.pageYOffset <= checkpoint5) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint5 && window.pageYOffset <= checkpoint6) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint6 && window.pageYOffset <= checkpoint7) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "active");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "inactive");
  } else if (window.pageYOffset > checkpoint7 && window.pageYOffset <= checkpoint8) {
    document.getElementsByClassName('indicator')[0].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[1].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[2].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[3].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[4].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[5].setAttribute("Id", "inactive");
    document.getElementsByClassName('indicator')[6].setAttribute("Id", "active");
  }
  setTimeout(indicator, 100);
}

indicator();

function resizenav() {
  checkpoint1 = document.getElementById('history').offsetTop - 105;
  if (window.pageYOffset > checkpoint1) {
    document.getElementsByTagName('nav')[0].setAttribute("class", "small");
  } else {
    document.getElementsByTagName('nav')[0].setAttribute("class", "large");
  }
  setTimeout(resizenav, 100);
}

resizenav();

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
