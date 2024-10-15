'use strict'

{
  const hour = document.getElementById('hour');
  const min = document.getElementById('min');
  const second = document.getElementById('seconds');

  function countDown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() +1);
    const timeDiff = tomorrow.getTime() - now.getTime();
    

    const calsHour = Math.floor(timeDiff / 1000 / 60 / 60);
    const calsMin = Math.floor(timeDiff / 1000 / 60) % 60;
    const calsSecond = Math.floor(timeDiff / 1000) % 60;

    hour.innerHTML = String(calsHour).padStart(2, '0');
    min.innerHTML = String(calsMin).padStart(2, '0');
    second.innerHTML = String(calsSecond).padStart(2, '0');
  }
  countDown();
  setInterval(countDown, 1000);
}