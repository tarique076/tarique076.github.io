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