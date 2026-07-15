console.log("Slider Loaded");
// Auto Hero Slider
const slides = [
"slide1.png",
"slide2.png",
"slide3.png"
];

let current = 0;
const hero = document.getElementById("slide");

if(hero){
setInterval(()=>{
current = (current + 1) % slides.length;
hero.src = slides[current];
},3000);
}

// Counter Animation
const counters = document.querySelectorAll(".counter-grid h3");

const startCounter = () => {
counters.forEach(counter => {
const target = parseInt(counter.innerText.replace(/\D/g,""));
let count = 0;

const update = () => {
count += Math.ceil(target / 100);

if(count < target){
counter.innerText = count + "+";
requestAnimationFrame(update);
}else{
counter.innerText = target + "+";
}
};

update();
});
};

const counterSection = document.querySelector(".counter");

if(counterSection){
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
startCounter();
observer.disconnect();
}
});
});

observer.observe(counterSection);
}

// Smooth Fade Animation
const items = document.querySelectorAll("section,.card,img");

const appear = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

items.forEach(item=>{
item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="all .8s ease";
appear.observe(item);
});
