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

