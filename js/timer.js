window.onload = function () {
  // Час у мілісекундах на 2 години
  const countdownTime = 2 * 60 * 60 * 1000; // 2 години = 7200000 мс

  // Отримати збережений час закінчення з localStorage
  let endTime = localStorage.getItem("countdownEndTime");

  if (!endTime) {
    // Якщо немає збереженого часу закінчення, встановити новий
    endTime = new Date().getTime() + countdownTime;
    localStorage.setItem("countdownEndTime", endTime);
  }

  // Функція для форматування чисел (додає 0 спереду, якщо число менше 10)
  function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
  }

  // Функція оновлення таймера
  function updateTimer() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance > 0) {
      // Розрахувати години, хвилини та секунди
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Відобразити таймер
      document.getElementById("timer").innerHTML = `${hours}:${formatTimeUnit(
        minutes
      )}:${formatTimeUnit(seconds)}`;
    } else {
      // Якщо час вийшов
      document.getElementById("timer").innerHTML = "Time is up!";
      localStorage.removeItem("countdownEndTime");
      clearInterval(timerInterval); // Зупинити таймер
    }
  }

  // Оновлювати таймер кожну секунду
  const timerInterval = setInterval(updateTimer, 1000);

  // Оновити таймер відразу при завантаженні
  updateTimer();
};
