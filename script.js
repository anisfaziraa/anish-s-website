// --- Smooth Scrolling for Links ---
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// --- Live Clock Function ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;

    // Add Messages
    const greeting =
        hours < 12
            ? "Good Morning! 🌞"
            : hours < 18
            ? "Good Afternoon! ☀️"
            : "Good Evening! 🌙";

    clockElement.setAttribute("title", greeting); 
}

setInterval(updateClock, 1000);
updateClock(); 

// --- Emoji Hover Effect ---
const emojis = document.querySelectorAll('.emojis span');

emojis.forEach(emoji => {
  emoji.addEventListener('mouseenter', () => {
    emoji.classList.add('hovered');
  });

  emoji.addEventListener('mouseleave', () => {
    emoji.classList.remove('hovered');
  });
});

// --- Specific Emoji Hover Animations ---
const loveEmoji = document.getElementById("love");
const ribbonEmoji = document.getElementById("ribbon");
const booksEmoji = document.getElementById("books");

loveEmoji.addEventListener("mouseenter", () => {
    loveEmoji.classList.add("heartbeat");
    loveEmoji.style.transform = "scale(1.3)";
    loveEmoji.style.color = "#ccff66"; // Change color on hover
});

loveEmoji.addEventListener("mouseleave", () => {
    loveEmoji.classList.remove("heartbeat");
    loveEmoji.style.transform = "scale(1)";
    loveEmoji.style.color = ""; // Reset color
});

ribbonEmoji.addEventListener("mouseenter", () => {
    ribbonEmoji.style.transform = "rotate(360deg)";
    ribbonEmoji.style.color = "#ff9999"; // Change color on hover
});

ribbonEmoji.addEventListener("mouseleave", () => {
    ribbonEmoji.style.transform = "rotate(0deg)";
    ribbonEmoji.style.color = ""; // Reset color
});

booksEmoji.addEventListener("mouseenter", () => {
    booksEmoji.style.transform = "rotate(15deg)";
    booksEmoji.style.color = "#66ffcc"; // Change color on hover
});

booksEmoji.addEventListener("mouseleave", () => {
    booksEmoji.style.transform = "rotate(0deg)";
    booksEmoji.style.color = ""; // Reset color
});

// --- Simple Form Validation ---
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all the fields!");
    }
});

// --- Intersection Observer for Animations ---
const elements = document.querySelectorAll(".fade-in, .slide-in");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

elements.forEach((el) => {
    observer.observe(el);
});

// --- Emoji Hover Effect (for scaling) ---
document.querySelectorAll(".emojis span").forEach((emoji) => {
    emoji.addEventListener("mouseover", () => {
        emoji.style.transform = "scale(1.5)";
        emoji.style.transition = "transform 0.3s ease";
    });
    emoji.addEventListener("mouseout", () => {
        emoji.style.transform = "scale(1)";
    });
});

// --- Confetti Effect ---
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const numberOfConfetti = 100; // Number of confetti particles

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomize the left position and size of each confetti
        const randomX = Math.random(); // Random horizontal position
        const randomSize = Math.random() * (15 - 5) + 5; // Random size between 5 and 15px
        const randomDelay = Math.random() * 2; // Random delay for animation

        // Apply random properties to confetti
        confetti.style.setProperty('--confetti-random-x', randomX);
        confetti.style.setProperty('width', `${randomSize}px`);
        confetti.style.setProperty('height', `${randomSize}px`);
        confetti.style.animationDelay = `${randomDelay}s`;

        // Append confetti to the container
        confettiContainer.appendChild(confetti);
    }
}

// Initialize confetti on page load
window.addEventListener('load', createConfetti);

document.addEventListener("DOMContentLoaded", () => {
 
 
document.querySelector(".contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Elak reload page

    let formData = new FormData(this);

    let response = await fetch("https://formspree.io/f/mlddopnb", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("Message sent successfully!");
        this.reset();
    } else {
        alert("There was an error sending your message.");
    }
});


