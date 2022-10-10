
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
    myButtons[i].addEventListener("click", makeRed);
}
// could use onClick="makeRed(this);" as a tag attribute in the HTML
// function makeRed(theVar){
//     theVar.style.backgroundColor = "red";
// }
// or
function makeRed(){
    this.style.backgroundColor = "red";
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

    // if(scrollY < wh){
        if(this.scrollY < header.clientHeight){
            header.style.width = "100%";
        }else{
            header.style.width = "40%";
        }

        let coords = sec.getBoundingClientRect();
        if(coords.y <= 0){
            // console.log("coords y: " + coords.y);
            // header.style.visibility = "hidden";
        }else{
            // header.style.visibility = "visible";
        }

    // }
}
window.addEventListener("scroll", myScroll);
// window.removeEventListener("scroll", myScroll);

