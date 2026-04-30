// Form submit alert (only once)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function() {
        alert("Thank you! Your message has been submitted.");
    });
}

// Smooth scroll + active nav highlight
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.style.color = "white");
        this.style.color = "#facc15";
    });
});

// Typing effect
const text = "AIML Student | Full Stack Learner";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector("header p").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

document.querySelector("header p").innerHTML = "";
typeEffect();