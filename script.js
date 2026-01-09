const music = document.getElementById("bgMusic");

// Fade-in & restore music
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const time = localStorage.getItem("musicTime");
    const playing = localStorage.getItem("playing");

    if (time) music.currentTime = time;
    if (playing === "true") music.play().catch(() => {});
});

// Save music time
setInterval(() => {
    if (!music.paused) {
        localStorage.setItem("musicTime", music.currentTime);
    }
}, 1000);

// Start music
function startSurprise() {
    const messages = [
        "🔥 Your stubborness is unstoppable so Please stop it!",
        "💙 Keep going straight like 24 hours you scroll instagram !",
        "🏆 Born to fight without any reason!",
        "🚀 The best has gone when you were sleeping!"
    ];

    document.getElementById("surpriseText").innerText =
        messages[Math.floor(Math.random() * messages.length)];

    music.play();
    localStorage.setItem("playing", "true");
}

// Smooth navigation
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = link.href;
        }, 400);
    });
});

const videoButtons = document.querySelectorAll(".video-btn");

videoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const video = button.previousElementSibling;

        if (video.paused) {
            video.play();
            button.textContent = "⏸ Pause";
        } else {
            video.pause();
            button.textContent = "▶ Play";
        }
    });
});

