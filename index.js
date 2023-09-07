const buttonClicked = document.querySelectorAll(".drum")

for (let i = 0; i < buttonClicked.length; i++){
  buttonClicked[i].addEventListener("click", function (){
   let audio = new Audio("./sounds/tom-1.mp3")
   audio.play();
  })
  
}


//var audio = new Audio ('audio_file.mp3);
//audio.play();




 
