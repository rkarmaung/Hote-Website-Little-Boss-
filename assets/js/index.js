//room slider index 
var roomMainDiv = document.querySelectorAll(".roomMain"),
    roomLeft = document.querySelector("#roomLeft"),
    roomRight = document.querySelector("#roomRight"),
    currentRoomDiv = 0;

  //clear all imgs
  function resetRoomImgs(){
    for(let i=0; i<roomMainDiv.length; i++){
      roomMainDiv[i].style.display = "none";
    }
  }

  //init slider
  function startRoomSlider(){
    resetRoomImgs();
    roomMainDiv[0].style.display = "block";
  }
  
  // show previous
  function roomLeftArrow() {
    resetRoomImgs();
    roomMainDiv[currentRoomDiv - 1].style.display = "block";
    currentRoomDiv--;
  }
  // arrowLeft click
  roomLeft.addEventListener("click", function(){
    if(currentRoomDiv===0){
      currentRoomDiv = roomMainDiv.length;
    }
    roomLeftArrow();
  });

  // show next
  function roomRightArrow() {
    resetRoomImgs();
    roomMainDiv[currentRoomDiv + 1].style.display = "block";
    currentRoomDiv++;
  }

  // arrowRight click
  roomRight.addEventListener("click", function(){
    if(currentRoomDiv === roomMainDiv.length - 1){
      currentRoomDiv = -1;
    }
    roomRightArrow();
  });

//start room slider
startRoomSlider();

//--------------------------------------------------------

//index > gallery start-----------------------------------
let sliders = document.querySelectorAll(".slider"),
    arrowLeft = document.querySelector(".arrowLeft"),
    arrowRight = document.querySelector(".arrowRight"),
    current = 0;
    
//clear all imgs
function reset() {
  for(let i=0; i<sliders.length; i++) {
    sliders[i].style.display = "none";
  }
}

//init slider
function startSlider() {
  reset();
  sliders[0].style.display = "block";
}

// show previous
function slideLeft() {
  reset();
  sliders[current - 1].style.display = "block";
  current--;
}

// arrowLeft click
arrowLeft.addEventListener("click", function(){
  if(current===0){
    current = sliders.length;
  }
  slideLeft();
});

// show next
function slideRight() {
  reset();
  sliders[current + 1].style.display = "block";
  current++;
}

// arrowRight click
arrowRight.addEventListener("click", function(){
  if(current === sliders.length - 1){
    current = -1;
  }
  slideRight();
});

startSlider();
//---------------------------------------------------------------

//parallax
var parallax = document.querySelectorAll(".parallax1");
// var parallaxFooter = document.querySelector(".parallax2");

window.addEventListener("scroll", function(){
  parallax[0].style.backgroundPositionY = window.pageYOffset/2+'px';
  // parallaxFooter.style.backgroundPositionY = +window.pageYOffset/20+'px';
});

//navBtn show
var navBtn = document.querySelector(".navBtn");
var mainSec = document.querySelector(".mainSec");
var nav = document.querySelector("#nav");

var counterNavBtn = 0;
navBtn.addEventListener("click", function(){
  if(counterNavBtn==0){
    
    mainSec.style.marginLeft = "300px";
    nav.style.display = "block";
    navBtn.style.left = "300px";

    counterNavBtn++;
  }else{
    mainSec.style.marginLeft = "0px";
    nav.style.display = "none";
    navBtn.style.left = "0px";

    counterNavBtn--;
  }
});

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     mainSec.style.marginLeft = "0px";
//     nav.style.display = "block";
//     nav.style.background = "white";
//     navBtn.style.display = "none";
//     // Close Navbar when click anywhere on window
//     var navLi = document.querySelector("#nav ul li");
//     window.addEventListener("mouseup", function(e){
//       if(e.target != nav || e.target != navLi){
//         mainSec.style.marginLeft = "300px";
//         nav.style.display = "none";
//         navBtn.style.display = "block";
//       }
//     });
//   } else {
//     element.removeEventListener(event, listener, useCapture);
//   }
// }

// var x = window.matchMedia("(max-width: 1010px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes