
const timerElement = document.getElementById("timer");
const targetDate = new Date("May 16, 2025 09:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    timerElement.innerHTML = "🎉 It's Time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);
