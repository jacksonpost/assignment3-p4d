

let clickable = document.querySelectorAll('.hero');
console.log(clickable);

for(let i=0; i<clickable.length; i++){
    clickable[i].addEventListener("click", function(){
        alert(clickable[i].alt);
    });
}