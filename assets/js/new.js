/* ==============================================
   Countdown
=============================================== */
	// Create a countdown instance. Change the launchDay according to your needs.
	// The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
	// Thus the launchDay below denotes 7 May, 2014.
	
var newYear = new Date(); 
newYear = new Date(2017, 1-1, 21);
$('.defaultCountdown').countdown({until: newYear, format: 'DHMS'});
