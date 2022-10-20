
// redefine a height variable when the window is resized
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
let wh = window.innerHeight;
window.onresize = (event) => {
    wh = window.innerHeight;
    console.log(wh);
};


// red background generator
let mySelection = document.querySelectorAll("section");
let sectionLinks = document.querySelectorAll(".section-link");
let colourInc = 150 / (mySelection.length-1);
for(let i=0; i<mySelection.length; i++){

    let bgColor = "rgb(" + (55 + (i * colourInc)) + ",0,0)";
    mySelection[i].style.background = bgColor;
    sectionLinks[i].parentElement.style.background = bgColor;
    // select images within our current selection
    // let myImgSelection = mySelection[i].querySelector("img");
    // if(myImgSelection !== null){
    //     myImgSelection.style.opacity = "0.25";
    // }
}


// make elements clickable
let myButtons = document.querySelectorAll(".button");
for(let i=0; i<myButtons.length; i++){
    // console.log(myButtons[i]);
    // can modify style directly:
    // myButtons[i].addEventListener("click", makeRed);
    // or toggle a css class:
    myButtons[i].addEventListener("click", toggleRed);

}
// could use onClick="makeRed(this);" as a tag attribute in the HTML
// function makeRed(theVar){
//     theVar.style.backgroundColor = "red";
// }
// or:
function makeRed(){
    this.style.backgroundColor = "red";
}
function toggleRed(){
    this.classList.toggle("red");
}


// nav based on a class and a dataset:
// <span class="section-link" data-target="#section1">Section 1</span>
let topNav = document.querySelectorAll(".section-link");
for(let i=0; i<topNav.length; i++){
    topNav[i].addEventListener("click", goToSection);
}
function goToSection(){
    let target = document.querySelector(this.dataset.target);
    target.scrollIntoView();
}

let header = document.querySelector("header .container");
let sec = document.querySelector("#section2");
function myScroll(){

    // header resize/collapse
    if(this.scrollY < header.clientHeight){
        header.style.flex = "1";
    }else{
        header.style.flex = "0";
    }

    // let coords = sec.getBoundingClientRect();
    // if(coords.y <= 0){
    //     // console.log("coords y: " + coords.y);
    //     // header.style.visibility = "hidden";
    // }else{
    //     // header.style.visibility = "visible";
    // }
}
window.addEventListener("scroll", myScroll);
// window.removeEventListener("scroll", myScroll);



// BROKEN - auto scroll experiment, replaced by css snapping
// let scrolling = false;
// window.addEventListener("scroll", scrollHandler);
// function scrollHandler(){
//     for(let i=1; i<mySelection.length; i++){
//         coords = mySelection[i].getBoundingClientRect();
//         console.log(scrolling);
//         if(!scrolling){
//             // console.log("section" + i + " ypos = " + coords.y);
//             // mySelection[i].addEventListener("scroll", theFunction);
//             if(coords.y > window.innerHeight / 6 && coords.y < window.innerHeight - (window.innerHeight / 6) ){
//                 snapTo(mySelection[i], i+1);
//             }
//         }else{
//             // if(coords.y > -40 && coords.y < 40){
//                 if(coords.y == 0){
//                 scrolling = false;
//             }
//         }
//     }
// }
// function snapTo(t, i){
//     console.log(t);
//     console.log("snapped to " + i);
//     scrolling = true;
//     t.scrollIntoView();
// }

// eventually do this on scroll - when the gallery ypos is 0, fadein li elements in sequence
$('.gallery li').hide();

$('.gallery .trigger').on('click', function(){

    $('.gallery li').each(function(index){
        // console.log(1000 * index);
        $(this).delay(1000 * index).fadeIn(1000);
    });
    // console.log(items);
    // $('.gallery li').fadeIn();

});


// 


var arr = [];
$('.sector-link').each(function(i) {
  arr.push($(this).data("scroll-point"));
  $(this).hide();
});

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  elementFade(scrollTop);
});

elementFade = function(top) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var max = i != (arr.length - 1) ? arr[i + 1] : (arr[i] + 100);
    if (top >= min && top < max) {
      $('[data-scroll-point="' + arr[i] + '"]').fadeIn(800);
      $('p.info').html($('[data-scroll-point="' + arr[i] + '"]').html() + " visible at point " + arr[i]);
    }else{
        $('[data-scroll-point="' + arr[i] + '"]').hide();
    }
  }
}

// 