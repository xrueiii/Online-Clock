let is24Hour = true;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    let period = '';

    if (!is24Hour) {
        period = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12; // 12-hour format
    }

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}${period}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();

  document.getElementById('toggleFormat').addEventListener('click', () => {
    is24Hour = !is24Hour;
  });