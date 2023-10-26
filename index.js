// NAVIGATION BAR TOGGLER
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-menu");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navlist.classList.toggle("active");
};


// ADD SHADOW TO NAVIGATION BAR WHILE SCROLLING
window.onscroll = function () {
  headerShadow();

  menu.classList.remove("fa-times");
  navlist.classList.remove("active");
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    navHeader.style.backgroundColor = "#112e42";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// TYPING EFFECT
var typingeffect = new Typed(".typedText", {
  strings: ["Designer", "Youtuber", "Developer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});
ss
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// CHANGE ACTIVE LINK
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         document
//             .querySelector('.nav-menu a[href*=' + sectionId + ']')
//             .classList.add('active-link');
//     } else {
//         document
//             .querySelector('.nav-menu a[href*=' + sectionId + ']')
//             .classList.remove('active-link');
//     }
//   })
// }

// window.addEventListener('scroll', scrollActive);

let sections = document.querySelectorAll('.section');
let navlinks = document.querySelectorAll('.nav-menu a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sed.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
              links.classList.remove("active");
                document.querySelector('.nav-menu a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}