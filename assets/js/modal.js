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
        renderedModal.style.opacity = "1.0";
    });
}

function closeIt(t){
    // let closer = document.querySelector(".close");
    // let closeTarget = closer.parentElement;
    document.body.removeChild(t);
}