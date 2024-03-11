const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2024, 3, 1, 12, 30, 0);

// Access values from futureDate
const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

const weekday = weekdays[futureDate.getDay()];

// we got month index based and we must convert to actually month and we have to do the same for day
// // day is index base day in weekend
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${day} ${date}. ${month} ${year} in ${hours}:${minutes}am`;

// Future time
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24h

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  // Set values array
  const values = [days, hours, minutes, seconds];

  // Set values to items
  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });

  if (time < 0) {
    clearInterval(countdown);

    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
