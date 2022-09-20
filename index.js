var buttonPressed  = document.querySelectorAll("button").length;
var i = 0;

for(i=0; i<buttonPressed; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
     })
    }

document.addEventListener("keydown", respondEvent);
function respondEvent (event){
    makeSound(event.key);
}

// function-all
 

function makeSound(key) {
    switch (key) {
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
        
        
        // default:console.log(innerHTML)
        // break;
     }
}















