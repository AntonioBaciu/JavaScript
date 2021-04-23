/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const today = new Date();
  const currentWeekDay = today.getDay();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1; // +1 -> makes JS see 12 values instead of 11
  const currentYear = today.getFullYear();
  const currentHours = today.getHours();
  const currentMinutes =
    (today.getMinutes() < 10 ? "0" : "") + today.getMinutes(); // displays numbers in two decimals

  // Days of Week Array
  const dayOfWeek = ["none", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  // Uses ternary to
  let currentDayName =
    currentWeekDay == 0
      ? dayOfWeek[0]
      : currentWeekDay == 1
      ? dayOfWeek[1]
      : currentWeekDay == 2
      ? dayOfWeek[2]
      : currentWeekDay == 3
      ? dayOfWeek[3]
      : currentWeekDay == 4
      ? dayOfWeek[4]
      : currentWeekDay == 5
      ? dayOfWeek[5]
      : dayOfWeek[6];

  // Months of Year Array
  const monthOfYear = [
    "None",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonthName =
    currentMonth == 0
      ? monthOfYear[0]
      : currentMonth == 1
      ? monthOfYear[1]
      : currentMonth == 2
      ? monthOfYear[2]
      : currentMonth == 3
      ? monthOfYear[3]
      : currentMonth == 4
      ? monthOfYear[4]
      : currentMonth == 5
      ? monthOfYear[5]
      : currentMonth == 6
      ? monthOfYear[6]
      : currentMonth == 7
      ? monthOfYear[7]
      : currentMonth == 8
      ? monthOfYear[8]
      : currentMonth == 9
      ? monthOfYear[9]
      : currentMonth == 10
      ? monthOfYear[10]
      : currentMonth == 11
      ? monthOfYear[11]
      : monthOfYear[12];

  document.getElementById(
    "target"
  ).textContent = `${currentDayName} ${currentDay} ${currentMonthName} ${currentYear}, ${currentHours}h${currentMinutes}`;
})();
