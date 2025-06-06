// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("May 16, 2024 18:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `
        <div class="countdown-box">
            <span>${days}</span> Days
        </div>
        <div class="countdown-box">
            <span>${hours}</span> Hours
        </div>
        <div class="countdown-box">
            <span>${minutes}</span> Minutes
        </div>
        <div class="countdown-box">
            <span>${seconds}</span> Seconds
        </div>
    `;
}

setInterval(updateCountdown, 1000);

// Initialize the countdown immediately
updateCountdown();
