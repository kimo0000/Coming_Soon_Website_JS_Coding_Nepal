const days = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const secondes = document.querySelector(".seconde");
const emailEl = document.querySelector(".mail input");
const btnEl = document.querySelector(".mail .btn");

console.log(days, hours, minutes, secondes);

let second = 15,
  minute = 10,
  hour = 15,
  day = 9;
let validEmail = /\w+@\w+.(com|net)/gi;

const updateTimer = () => {
  second--;
  if (second == 0) {
    second = 59;
    minute--;
  }

  if (minute == 0) {
    minute = 59;
    hour--;
  }

  if (hour == 0) {
    hour = 24;
    day--;
  }

  days.textContent = day < 10 ? "0" + day : day;
  hours.textContent = hour < 10 ? "0" + hour : hour;
  minutes.textContent = minute < 10 ? "0" + minute : minute;
  secondes.textContent = second < 10 ? "0" + second : second;

  if (day == 0) {
    clearInterval(timer);
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    secondes.textContent = "00";
  }
};

let timer = setInterval(updateTimer, 1000);

emailEl.addEventListener("input", () => {
  if (validEmail.test(emailEl.value)) {
    btnEl.classList.add("valid");
  } else {
    btnEl.classList.remove("valid");
  }
});
