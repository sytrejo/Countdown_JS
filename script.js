const countdown = document.querySelector(".countdown");
const resetButton = document.querySelector(".reset");
const deadline = new Date(2022, 7, 15, 12, 0, 0);

let interval;

function startCountdown() {
  interval = setInterval(() => {
    const current = new Date();
    const diff = deadline - current;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
    const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
    const seconds = Math.floor((diff / 1000) % 60) + "";

    countdown.innerHTML = `
      <div data-content="Days">${days.length === 1 ? `0${days}` : days}</div>
      <div data-content="Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
      <div data-content="Minutes">${
        minutes.length === 1 ? `0${minutes}` : minutes
      }</div>
      <div data-content="Seconds">${
        seconds.length === 1 ? `0${seconds}` : seconds
      }</div>
    `;

    if (diff < 0) {
      clearInterval(interval);
      countdown.innerHTML = "<h1>Here We Go!!!</h1>";
    }
  }, 1000);
}

resetButton.addEventListener("click", () => {
  clearInterval(interval);

  countdown.innerHTML = `
    <div data-content="Days">00</div>
    <div data-content="Hours">00</div>
    <div data-content="Minutes">00</div>
    <div data-content="Seconds">00</div>
  `;

  startCountdown();
});

startCountdown();
