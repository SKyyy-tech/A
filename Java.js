
const hamburger = document.getElementById("hamburger")
const navlinks = document.getElementById("navlinks")

hamburger.addEventListener('click',() => {
    navlinks.classList.toggle('active');
});



const text = "Hello Amigos, I'm Steve";
const typedText = document.getElementById('h-0');
let index = 0;

function type(){
    if(index < text.length){
       typedText.textContent += text.charAt(index);
       index++;
       setTimeout(type, 150);
    }
}
type();