// Set the date we're counting down to
var countDownDate = new Date("December 31, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Calculate months, days, hours, minutes and seconds left
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) % 30;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in the countdown HTML elements
  document.querySelector('.months').innerHTML = months.toString().padStart(2, '0');
  document.querySelector('.days').innerHTML = days.toString().padStart(2, '0');
  document.querySelector('.hours').innerHTML = hours.toString().padStart(2, '0');
  document.querySelector('.minutes').innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector('.seconds').innerHTML = seconds.toString().padStart(2, '0');
    
  // If the countdown is over, stop the interval and update the HTML to indicate it's over
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = "Countdown over!";
  }
}, 1000);

