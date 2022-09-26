// fades an element into view as we scroll down
// uses some simple css and an HTML element
// needs to be improved so that multiple elements can be faded with the same code - try it!

// https://javascript.info/coordinates
let fader = document.querySelector("#scrollfader");
let coords = fader.getBoundingClientRect();
let startY = coords.y;

window.addEventListener("scroll", function(){
    
    coords = fader.getBoundingClientRect();
    // console.log(this.scrollY);

    if(coords.y > 0){
        // console.log("height: " + coords.height);
        // console.log("y: " + coords.y);
        // console.log("opacity: " + (1 - (coords.y / startY)) );
        fader.style.opacity = 1 - (coords.y / startY);
    }
 
});

// element event listener
fader.addEventListener("click", function(){
    if(fader.style.opacity > 0){
        alert("you clicked my fader");
    }
});