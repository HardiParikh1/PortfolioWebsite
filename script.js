// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }
function Clicksound(){
    var snd = new Audio('clicksounds.mp3')
    snd.play()
}

alert("ALERT! \nThis website uses cookies to enhance your user experience. By using this website, you consent to our use of cookies.");


let scrollButton = document.getElementById("myBtn");
window.onscroll = function() {
    scroll()
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
    } 
    else {
    scrollButton.style.display = "none";
    }
}
function top() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
