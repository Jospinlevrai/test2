function greetings(fname, today) {
    // Spot time
    var hour = today.getHours();

    // Greetings
    if (hour < 12) {
        var greeting = "Good Morning!";
    } else if (hour < 18) {
        var greeting = "Good Afternoon!";
    } else {
        var greeting = "Good Evening!";
    }
    return greeting + " " + fname + " " + "<br>Welcome to my website!";
}

function starTime() {
    var today = new Date(); // Get the current date and time
    var weekday = today.getDay(); // Get the current day of the week (0-6)
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = days[weekday]; // Get the name of the current day
    var day = today.getDate();
    var month = today.getMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[month]; // Get the name of the current month 
    var year = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    document.getElementById("dateTime").innerHTML = dayName + ", " + day + " " + monthName + " " + year + " " + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    var t = setTimeout(starTime, 1000); // refresh time every 1 second
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function daysInMonths(DateTime) { // function to calculate the number of days in the current month
    var currentMonth = DateTime.getMonth() + 1; // get the current month (0-11, so we add 1 to get 1-12)
    var months_with_30_days = [4, 6, 9, 11]; // April, June, September, November
    var months_with_31_days = [1, 3, 5, 7, 8, 10, 12]; // January, March, May, July, August, October, December
    var february_month = 2; // February
    if (months_with_30_days.includes(currentMonth)) {
        var daysInMonth = 30;
    } else if (months_with_31_days.includes(currentMonth)) {
        var daysInMonth = 31;
    } else if (currentMonth === february_month) {
        var year = DateTime.getFullYear(); // get the current year
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            var daysInMonth = 29; // Leap year
        } else {
            var daysInMonth = 28; // Non-leap year
        }
    }
    return daysInMonth;
}

function FormValidation(registrationForm) {
     // JavaScript for form validation
    // Create an event listener for form submission
    document.getElementById(registrationForm).addEventListener('submit', function(event){
        event.preventDefault(); // Prevent form from submitting

        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';

        // Flag to track form validity
        let isValid = true;

         // Sample user details object
        // Validate Full Name
        const fullname = document.getElementById('fullname').value.trim();
        if (fullname === '') { // Check if the full name field is empty
            document.getElementById('nameError').textContent = 'Full Name is required';
            isValid = false;
        }else if (fullname.length < 3) { // Check if the full name is too short
            document.getElementById('nameError').textContent = 'Full Name must be at least 3 characters long';
            isValid = false;
        }else if (!/^[a-zA-Z\s']+$/.test(fullname)) { // Check if the full name contains only letters, spaces, and apostrophes
            document.getElementById('nameError').textContent = 'Full Name can only contain letters, spaces, and apostrophes';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim(); // Check if the email field is empty
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email format
        const validEmailDomains = ['gmail.com', 'yahoo.com', 'strathmore.edu', 'o365.strathmore.edu']; // List of valid email domains
        const emailDomain = email.split('@')[1]; // Extract the domain from the email address
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(email)) { // Check if the email format is valid
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        } else if (!validEmailDomains.includes(emailDomain)) { // Check if the email domain is valid
            document.getElementById('emailError').textContent = 'Email domain must be one of the following: ' + validEmailDomains.join(', ');
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value.trim();
        const phonePattern = /^\+?\d{3,13}$/; // Regular expression for validating phone number (digits and optional plus sign at the beginning, with a length of 3 to 13 digits)
        if (phone === '') { // Check if the phone number field is empty
            document.getElementById('phoneError').textContent = 'Phone Number is required';
            isValid = false;
        }else if (!phonePattern.test(phone)) { // Check if the phone number contains only digits, optional plus sign at the beginning and has a valid length
            document.getElementById('phoneError').textContent = 'Invalid phone number format.';
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value.trim();
        if (password === '') { // Check if the password field is empty
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        }else if (password.length < 6) { // Check if the password is too short
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirm_password').value.trim();
        if (confirmPassword === '') { // Check if the confirm password field is empty
            document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
            isValid = false;
        } else if (password !== confirmPassword) { // Check if the passwords match
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit it or perform further actions
            document.getElementById('validation_result').textContent = 'Form is valid! Submitting...';
            document.getElementById('validation_result').className = 'success';
        }else {
            document.getElementById('validation_result').textContent = '';
        }
    });
}