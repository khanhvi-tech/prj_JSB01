function countdownTimer() {
    const difference = +new Date("2021-6-21") - +new Date();
    let remaining = "Haikyuu Season 5 Ep 1 May Be Released ";
  
    if (difference > 0) {
      const parts = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      remaining = Object.keys(parts).map(part => {
      return `${parts[part]} ${part}`;
      }).join(" ");
    }
  
    document.getElementById("countdown").innerHTML = remaining;
  }
 
  countdownTimer();
    setInterval(countdownTimer, 1000);