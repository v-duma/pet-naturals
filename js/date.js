document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("date");

  // Отримуємо актуальну дату
  const currentDate = new Date();

  const year = currentDate.getFullYear(); // Наприклад, 2024
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Місяці в JavaScript починаються з 0, тому додаємо 1
  const day = String(currentDate.getDate()).padStart(2, "0"); // Додаємо 0 перед числом, якщо воно менше 10

  // Форматувати дату як "YYYY-MM-DD"
  const formattedDate = `${day}.${month}.${year}`;

  // Виводимо дату в елемент з id="date"
  dateElement.textContent = `Order date: ${formattedDate}`;
});
