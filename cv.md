# Aleksandr Myagkiy
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contacts:
   * Location: Ukraine, Kiev
   * Phone: +38(098)624-42-14
   * Email: dentranscom@gmail.com
   * GitHub: [Aleksandr Myagkiy](https://github.com/AleksandrMyagkiy)
    
## About Me
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum


## My Skils:
   1. HTML
   2. CSS/SASS(Bootstrap)
   3. JavaScript
   4. Git
   5. Gulp
   6. Webpack
   7. Figma
   8. React
    
## Code Example
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
// Timer
     
function timer(id, deadline) {
    	
	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector /*'.timer'*/ ), 
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) { 
				clearInterval(timeInterval);
			}
		}
	}

	setClock(id, deadline);
}
```

## Education:
   * Udemi:
       + [WEB-разработчик 2021](https://www.udemy.com/course/webdeveloper/)
       + [Полный курс по JavaScript + React](https://www.udemy.com/course/javascript_full/)
       + [Практический JavaScript](https://www.udemy.com/course/javascript_practice/)
   * [FreeCodeCamp](https://www.freecodecamp.org/)
   * W3Schools:
       + [HTML](https://www.w3schools.com/html/default.asp)
       + [CSS](https://www.w3schools.com/css/default.asp)
       + [JavaScript](https://www.w3schools.com/js/default.asp)
        
# Languages:
   1. Ukrainian - native language
   2. Russian - native language
   3. English - A1
