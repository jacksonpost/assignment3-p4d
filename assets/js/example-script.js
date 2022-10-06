
// redefine a height variable when the window is resized
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
let wh = window.innerHeight;
window.onresize = (event) => {
    wh = window.innerHeight;
    console.log(wh);
};

let mySelection = document.querySelectorAll("section");

// mySelection.style.backgroundColor = "red";
// or
// red background generator
let colourInc = 150 / (mySelection.length-1);
for(let i=0; i<mySelection.length; i++){

    // mySelection[i].style.width = 10 + (i * 30) + "%";
    mySelection[i].style.background = "rgb(" + (55 + (i * colourInc)) + ",0,0)";

    // select images within our current selection
    // let myImgSelection = mySelection[i].querySelector("img");
    // if(myImgSelection !== null){
    //     myImgSelection.style.opacity = "0.25";
    // }
}

let myButtons = document.querySelectorAll(".button");
for(let i=0; i<myButtons.length; i++){
    // console.log(myButtons[i]);
    myButtons[i].addEventListener("click", makeRed);
}

// function makeRed(theVar){
//     theVar.style.backgroundColor = "red";
// }
function makeRed(){
    // console.log(this);
    this.style.backgroundColor = "red";
}

let sec1 = document.querySelector("#section2");

function myScroll(){

    // console.log(scrollY);

    // if(scrollY < wh){
        let header = document.querySelector("header");
        if(this.scrollY < header.clientHeight){
            header.style.width = "100%";
        }else{
            header.style.width = "40%";
        }

        let coords = sec1.getBoundingClientRect();

        if(coords.y <= 0){
            // console.log("coords y: " + coords.y);
            // sec1.addEventListener("scroll", myScroll2);
            header.style.visibility = "hidden";
        }else{
            header.style.visibility = "visible";
        }

        if(coords.y < window.innerHeight){
            console.log("less than window innerheight");
            // sec1.removeEventListener("scroll", myScroll2);
        }


    // }
}
function myScroll2(){
    console.log("bottom of window");
}

window.addEventListener("scroll", myScroll);

// window.removeEventListener("scroll", myScroll());