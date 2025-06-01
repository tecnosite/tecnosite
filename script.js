function startCountdown() {
  const now = new Date().getTime();
  const countdownDate = now + 24 * 60 * 60 * 1000;

  const timer = setInterval(() => {
    const current = new Date().getTime();
    const distance = countdownDate - current;

    if (distance <= 0) {
      clearInterval(timer);
      startCountdown(); // reinicia automaticamente
      return;
    }

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }, 1000);
}

startCountdown();
