
let mySelection = document.querySelectorAll("section");
// console.log(mySelection);
let myImgSelection = document.querySelector("img");

// mySelection.style.backgroundColor = "red";
myImgSelection.style.width = "50%";

for(let i=0; i<mySelection.length; i++){
    console.log(mySelection[i]);
    mySelection[i].style.width = 10 + (i * 30) + "%";
    mySelection[i].style.background = "rgb(" + (i * 90) + ",0,0)";
}