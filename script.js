
const eventDate = new Date("June 16, 2025 09:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    timerElement.innerHTML = "<div class='count-box'>🎉 It's time to celebrate!</div>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `
    <div class="count-box"><span>${days}</span>Days</div>
    <div class="count-box"><span>${hours}</span>Hours</div>
    <div class="count-box"><span>${minutes}</span>Minutes</div>
    <div class="count-box"><span>${seconds}</span>Seconds</div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
