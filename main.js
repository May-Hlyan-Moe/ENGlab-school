//navigation scroll

const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
});

//address

var address = "No.123, Main Sreet, Thaketa Township, Yangon";

document.getElementById("address").textContent = address;

//current year 

var now = new Date();

var currentYear = now.getFullYear();

document.getElementById("currentYear").textContent = currentYear;