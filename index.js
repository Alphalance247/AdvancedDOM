// var numberOfDrums = document.querySelectorAll(".drum").length;
// var i = 0;
// function clickListener(){
//     alert("i got clicked");
//     }
//     while( i < numberOfDrums){ 
//     document.querySelectorAll(".drum")[i].addEventListener("click", clickListener);
//     i++;
//     };



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


var allClick = document.querySelectorAll(".drum").length;

for(var i = 0; i < allClick; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",eventListener)
};
function eventListener() {
     switch (this.innerHTML) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;


        case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;


        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

        case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        

        case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        
        case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        
        
        case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        
        
        default:console.log(innerHTML)
        break;
     }
}
document.addEventListener("keypress", function(event){
    switch (this.event) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    
        default:console.log(event)
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    }
 })


















