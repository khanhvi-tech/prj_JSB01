function countdownTimer() {
    const difference = +new Date("2020-12-20") - +new Date();
    let remaining = "Haikyuu Season 4 Court 2 - Ep 12 Released ";
  
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