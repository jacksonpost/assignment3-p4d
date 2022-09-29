// A script to make HTML elements with the .draggable class draggable in a smoothish way
// requires some CSS to function well, add this to your main CSS file:
// .draggable{
//     user-select: none;
//     position: absolute;
//     z-index: 1000;
// }

// select elements that have the draggable class
let drags = document.querySelectorAll(".draggable");

// loop through our draggable elements
for( let i=0; i<drags.length; i++ ) {

    // you could add drag event listeners to each:
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event
    // drags[i].addEventListener("dragstart", (event) => {
    //     // console.log("dragstart");
    // });
    // drags[i].addEventListener("drag", (event) => {
    //     // console.log("you're dragging me!");
    // });
    // drags[i].addEventListener("dragend", (event) => {
    //     // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
    //     console.log("mouse x: " + event.pageX + " | " + "mouse y: " + event.pageY);
    //     drags[i].style.left = event.pageX + "px";
    //     drags[i].style.top = event.pageY + "px";
    // });

    // or use your own drag logic:
    // on mousedown - add mousemove listener
    // on mousemove - change element left and top to mouse x and y
    // on mouseup - remove mousemove listener
    drags[i].addEventListener("mousedown", (event) => {

        // make a function variable that we can use to respond to events
        // we use this instead of an anonymous function when we need to remove specific event listeners - as below
        // because this function is called by an event we can automatically get event data through a function parameter (e)
        // the data includes properties we can get from a mouse event: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
        let mover = function(e){
            drags[i].style.left = e.pageX + "px";
            drags[i].style.top = e.pageY + "px";
        }

        // call our function variable when the mouse moves
        window.addEventListener( "mousemove", mover );

        window.addEventListener("mouseup", (event) => {
            // remove our mousemove listener when the user is done dragging
            // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
            window.removeEventListener( "mousemove", mover );
        });
        
    });

}