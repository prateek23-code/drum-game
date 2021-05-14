var t= document.querySelectorAll("button");
for(var i=0;i<t.length;i++){
    t[i].addEventListener("click",ref);
    
}






function ref (){
     
    switch (this.innerText) {
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        case "x":
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;
        case "y":
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case "z":
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('snare.mp3');
            audio.play();
            break;
        case "m":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;
        case "v":
            var audio = new Audio('crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

document.addEventListener("keypress",make);
function make(event){
    switch (event.key) {
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        case "x":
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;
        case "y":
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case "z":
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('snare.mp3');
            audio.play();
            break;
        case "m":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;
        case "v":
            var audio = new Audio('crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

