var numberOfDrums = document.querySelectorAll(".drum").length;
var i = 0;
function clickListener(){
    alert("i got clicked");
    }
    while( i < numberOfDrums){ 
    document.querySelectorAll(".drum")[i].addEventListener("click", clickListener);
    i++;
    };



// var number = [];
// var i = 0
// function clickListener(){

// while (i < numberOfDrums){
//     document.querySelectorAll(".drum")[i].addEventListener("click", clickListener);
    // document.querySelectorAll(".drum")[i].classList.add("added-class")
    // console.log(document.querySelectorAll(".drum")[i])
    // i++
// }
// alert("i got clicked");
// }

// clickListener()


var allClick = document.querySelectorAll("button").length;

for(var i = 0; i < allClick; i++){
document.querySelectorAll("button")[i].addEventListener("click",eventListener)
};
function eventListener() {
    alert("i got cliced");
}


















