
// create an incremental counter
let inc = 0;

// remember, you can use objects to store and retrieve data:
let obj = {
    property: "value",
    property2: "value2"
}
console.log(obj.property);

// create an array of elements that match a query
let elements = document.querySelectorAll(".day");
console.log(elements);

// loop through our elements array to work on the contents
for( let i=0; i<elements.length; i++ ) {
  
    console.log(elements[i]);
//   multiple ways to change the style of an element
    // elements[i].style.border = "5px solid #000000";
    // elements[i].style.borderColor = "#00ff00";
    // elements[i].className += " redback";
    // elements[i].className = addClass( elements[i], "redback" );
    // elements[i].className = elements[i].className + " redback";

    //   FOR REFERENCE - create a timer that triggers a function periodically
    // setInterval(
    //     function(){
    //         elements[i].innerHTML = inc;
    //         // increase inc at the last iteration of the loop
    //         if( i == elements.length-1 ){ inc ++ }
    //     }
    // , 1000);
}
// Glitch example of the above
// https://glitch.com/edit/#!/kindhearted-carpal-aftershave 

// a utility function to add a new class to an element
function addClass( element, addClassName ) {
  
    //  start with any existing classes then tack ours on the end
    let newClassName = element.className + " " + addClassName;

    return newClassName;
}


// Working with forms
// do things when the form submit button is pushed
function validateForm() {

    // select a single element with an ID
    let msgBox = document.querySelector("#message-area");
    let fail = "Please give me knowledge";
    let success1 = "Thanks for the knowledge, and for checking me out!";
    let success2 = "Thanks for the knowledge!  Check me out next time";

    let f = document.forms["myForm"];
    console.log(f);
    let fText = f["myField"].value;

    // use the console to check what data functions are returning
    // console.log(f["checkit"]);
  
    if ( fText == "" ) {

        msgBox.innerHTML = '<p>' + fail + '</p>';
        // alert("Please give me knowledge");

    } else {

        if( f["checkit"].checked ){ 

            msgBox.innerHTML = '<p>' + success1 + '</p>' + "Your knowledge: " + fText;
            // alert("Thanks for the knowledge, and for checking me out!"); 

        } else {

            msgBox.innerHTML = '<p>' + success2 + '</p>' + "Your knowledge: " + fText;
            // alert("Thanks for the knowledge!  Check me out next time"); 

        }
    }

  // stop the form refreshing the page - returning true validates the form and refreshes
  return false;
}


// a global event listener
window.addEventListener("click", function(){
    // alert("click");
});



// vertical scroll meter for horizontal scrolling - needs refinement
let scrollMeter = document.querySelector("#scroll-meter");

let fullHeight = document.querySelector("body").offsetHeight; //+ document.querySelector("html").clientHeight;
// fullWidth needs to be taken from scroll-meter's parent/max-width
let fullWidth = scrollMeter.parentElement.offsetWidth;

let scrollPosition = 0;
let remap = fullHeight / fullWidth;

window.addEventListener("scroll", function(){
    
    scrollPosition = window.scrollY
    // console.log(scrollPosition);

    scrollMeter.style.width = (scrollPosition * remap) + "px";
});

