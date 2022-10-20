// a very simple modal/lightbox tool
// add the .zoomable class to images on the page to make them clickable
// as always, uses a combo of css and js.  The css is longer than the js!

let imgViewer = document.querySelectorAll("img.zoomable");
for(let i=0; i<imgViewer.length; i++){
    // add click listener and build modal
    imgViewer[i].addEventListener("click", function(){
        let modal = document.createRange().createContextualFragment('<div class="modal" onClick="closeIt(this);"><img src="' + this.src + '"><div class="close"></div></div>');
        document.body.appendChild(modal);
        let renderedModal = document.querySelector(".modal");

        // this timeout is only to make the opacity change usable by css transitions, the timeout is basically instant
        // https://stackoverflow.com/questions/40453881/change-of-opacity-using-css-transition-and-vanilla-javascript-works-only-when-fa
        setTimeout(() => {
            renderedModal.style.opacity = "1.0";
        });
    });
}

function closeIt(t){

    // this timeout is only to make the opacity change usable by css transitions, the timeout is basically instant
    setTimeout(() => {
        t.style.opacity = "0";
    });

    // this timeout is used to delay the child removal until the css transition is finished
    // hardcoding the 250ms is not the best idea though, getting the transition time through a function would be better
    setTimeout(() => {
        document.body.removeChild(t);
    }, 250);
}