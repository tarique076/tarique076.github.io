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

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navlist li');

navLi.forEach(li=> {
   console.log(li);
})

window.addEventListener('scroll', ()=>{
   let curr = '';

   sections.forEach(section =>{
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYOffset +100 >= sectionTop){
         curr = section.getAttribute('id');
      }
      navLi.forEach(li=>{
         li.classList.remove('active');
         if(li.classList.contains(curr + '_nav')){
            li.classList.add('active');
         }
      })
   })
})

// --------------GitHub-Calender--------------------
var username = "tarique076";
GitHubCalendar(".calendar", "tarique076", { responsive: true });

 // Use a proxy
//  GitHubCalendar(".calendar", "tarique076", {
//    proxy (username) {
//      return fetch(`https://github.io/github?user=${username}`)
//    }
// }).then(r => r.text())

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
   reset: false
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