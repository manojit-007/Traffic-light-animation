let circles = document.querySelectorAll(".container .circle");
let light = 0;

setInterval(() => {
    nextColor();
},2000);

function nextColor() {
    circles.forEach(circle => circle.classList.remove("active")); 
    circles[light].classList.add("active"); 
    light = (light + 1) % circles.length; 
}
