// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }

});

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        nav.classList.remove("show");

    });

});

// ===============================
// BACK TO TOP
// ===============================

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "grid";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// COUNTER
// ===============================


const counters = document.querySelectorAll(".counter");

const speed = 80;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = parseFloat(counter.dataset.target);

            const suffix = counter.dataset.suffix || "";

            let count = parseFloat(counter.innerText) || 0;

            const increment = target / speed;

            if (count < target) {

                count += increment;

                if (count > target) count = target;

                if (Number.isInteger(target)) {

                    counter.innerText = Math.ceil(count) + suffix;

                } else {

                    counter.innerText = count.toFixed(1) + suffix;

                }

                requestAnimationFrame(update);

            } else {

                if (Number.isInteger(target)) {

                    counter.innerText = target + suffix;

                } else {

                    counter.innerText = target.toFixed(1) + suffix;

                }

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.getElementById("statistics");

    if (!stats) return;

    const trigger = stats.offsetTop - 300;

    if (window.scrollY > trigger && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

});

// ===============================
// CURSOR GLOW
// ===============================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    if (cursor) {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }

});

// ===============================
// TYPED JS
// ===============================

if (typeof Typed !== "undefined") {

    new Typed(".gradient-text", {

        strings: [

            "With Smart Digital Marketing",

            "Increase Your Sales",

            "Performance Marketing",

            "Grow Your Business"

        ],

        typeSpeed: 60,

        backSpeed: 35,

        backDelay: 1500,

        loop: true

    });

}

// ===============================
// FADE IN ON SCROLL
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-element");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".service-card, .portfolio-card, .testimonial-card, .skill-card"

).forEach(card => {

    observer.observe(card);

});

// ===============================
// PARALLAX HERO
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector("#home");

    if (hero) {

        hero.style.backgroundPositionY =

            window.scrollY * 0.5 + "px";

    }

});

// ===============================
// YEAR AUTO
// ===============================

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =

        `© ${year} XWorld Marketing. All Rights Reserved.`;

}

// ===============================
// CERTIFICATE POPUP
// ===============================

const modal = document.querySelector(".certificate-modal");

const preview = document.getElementById("certificatePreview");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".view-certificate").forEach(btn=>{

btn.addEventListener("click",()=>{

preview.src=btn.dataset.image;

modal.classList.add("active");

});

});

closeModal.addEventListener("click",()=>{

modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

});