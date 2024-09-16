
document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    document.querySelector('.overlay').classList.toggle('overlay-active');
    document.body.classList.toggle('no-scroll');
    });
    
    document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('sidebar-open');
    document.querySelector('.overlay').classList.remove('overlay-active');
    document.body.classList.remove('no-scroll');
    });
    
    
    
    document.querySelector('.closee').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('sidebar-open');
    document.querySelector('.overlay').classList.remove('overlay-active');
    document.body.classList.remove('no-scroll');
    });
    
    
    document.getElementById("servicesToggle").addEventListener("click", function(event) {
    event.preventDefault(); 
    var menu = document.getElementById("servicesMenu");
    menu.classList.toggle("active"); 
    });
    
    
    document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    const dropdown = document.getElementById('services-dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
    });
    
    window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('services-dropdown');
    const link = document.getElementById('services-link');
    if (!dropdown.contains(event.target) && event.target !== link) {
        dropdown.style.display = 'none';
    }
    });
    
    document.querySelectorAll('.dropdown > li > a').forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); 
    
        const nestedDropdown = this.nextElementSibling; 
        document.querySelectorAll('.nested-dropdown').forEach((dropdown) => {
            if (dropdown !== nestedDropdown) {
                dropdown.style.display = 'none';
            }
        });
        if (nestedDropdown.style.display === 'block') {
            nestedDropdown.style.display = 'none';
        } else {
            nestedDropdown.style.display = 'block';
        }
    });
    });
    
    window.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.nested-dropdown').forEach((dropdown) => {
            dropdown.style.display = 'none';
        });
    }
    });
    
    const servicesLink = document.getElementById('services-link');
    const servicesDropdown = document.getElementById('services-dropdown');
    
    servicesLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    servicesDropdown.style.display = servicesDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    window.addEventListener('click', function(event) {
    if (!event.target.closest('.services-menu')) {
        servicesDropdown.style.display = 'none';
    }
    });