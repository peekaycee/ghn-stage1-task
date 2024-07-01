document.addEventListener('DOMContentLoaded', () => {
  function updateTime() {
    // Display current time in UTC
    const currentTimeUTC = new Date().toUTCString();
    document.querySelector(
      '[data-testid="currentTimeUTC"]'
    ).innerHTML = `<strong>Current Time (UTC) :</strong> ${currentTimeUTC}`;

    // Display current day of the week
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDay = daysOfWeek[new Date().getUTCDay()];
    document.querySelector(
      '[data-testid="currentDay"]'
    ).innerHTML = `<strong>Current Day : </strong> ${currentDay}`;
  }

  // Initial call to display the time immediately
  updateTime();

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);
});

//  Confirming the natural width and height of image
// document.addEventListener('DOMContentLoaded', () => {
//     const img = document.querySelector('[data-testid="slackProfilePicture"]');
//     console.log(`Natural Width: ${img.naturalWidth}, Natural Height: ${img.naturalHeight}`);
// });
