
const eventDate = new Date("May 16, 2025 09:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    timerElement.innerHTML = "🎉 It's time to celebrate!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `
    <div><strong>${days}</strong> Days</div>
    <div><strong>${hours}</strong> Hours</div>
    <div><strong>${minutes}</strong> Minutes</div>
    <div><strong>${seconds}</strong> Seconds</div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
