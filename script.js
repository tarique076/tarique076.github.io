//Typing-text.
var typed = new Typed(".auto-type", {
   strings: ["Java Backend Developer.","Problem Solver.", "Bodybuilding Enthusiast.","Basketball Enthusiast." ],
   typeSpeed: 100,
   backSpeed: 100,
   loop: true
})
//-----------Navbar--------------------------------
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
   header.classList.toggle("sticky", this.window.scrollY>0); 
})


// --------------GitHub-Calender--------------------
var username = "tarique076";
GitHubCalendar(".calendar", "tarique076", { responsive: true });

// ---------Menu responsive-------

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navlist.classList.remove('active');
}

// -------------- Scroll -------------------
const  sr = ScrollReveal ({
   distance: '20px',
   duration: 1500,
   reset: true
})

sr.reveal('.about-text', {delay:150, origin:'right'});
sr.reveal('.home-img', {delay:150, origin:'left'});

sr.reveal('.home', {delay:50, origin:'top'});

sr.reveal('#skills_container', {delay:150, origin:'left'});

sr.reveal('#olx', {delay:150, origin:'left'});
sr.reveal('#max', {delay:150, origin:'right'});

sr.reveal('.calender', {delay:150, origin:'left'});
sr.reveal('.git-lang', {delay:150, origin:'right'});
sr.reveal('.git-perf', {delay:150, origin:'left'});
sr.reveal('.git-trophies', {delay:150, origin:'right'});

sr.reveal('.contact-con', {delay:150, origin:'top'});