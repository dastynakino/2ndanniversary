// floating hearts
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (Math.random()*3 + 3) + "s";
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,300);

// surprise message
document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("surpriseMsg").classList.toggle("hidden");
};

// music button
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => {
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
};

// slideshow
let slideIndex = 0;
function showSlides(){
  const slides = document.getElementsByClassName("slide");
  for(let i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,3000);
}
showSlides();

// countdown to 3rd anniversary
const target = new Date("2027-01-10");
setInterval(()=>{
  const now = new Date();
  const diff = target-now;
  const days = Math.floor(diff/(1000*60*60*24));
  document.getElementById("timer").innerText = days + " days to go";
},1000);
// CONFETTI HEARTS
function explodeConfetti(event){
  const numberOfHearts = 25; // hearts per click
  for(let i=0;i<numberOfHearts;i++){
    const heart = document.createElement("div");
    heart.classList.add("confetti-heart");
    heart.innerHTML = "❤️";

    // starting position at button
    const rect = event.target.getBoundingClientRect();
    heart.style.left = rect.left + rect.width/2 + "px";
    heart.style.top = rect.top + rect.height/2 + "px";

    // random explosion direction
    const x = (Math.random()-0.5)*200 + "px"; // horizontal
    const y = -Math.random()*300 + "px";      // vertical

    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);

    document.body.appendChild(heart);

    // remove heart after animation
    setTimeout(()=>heart.remove(), 1500);
  }
}

// attach to button click
document.getElementById("surpriseBtn").addEventListener("click", explodeConfetti);
