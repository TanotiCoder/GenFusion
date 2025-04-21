 // Mobile menu functionality
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const nav = document.getElementById('nav');
 const overlay = document.getElementById('overlay');
 
 mobileMenuBtn.addEventListener('click', function() {
     nav.classList.toggle('active');
     overlay.classList.toggle('active');
     
     // Change menu icon
     const icon = mobileMenuBtn.querySelector('i');
     if (icon.classList.contains('fa-bars')) {
         icon.classList.remove('fa-bars');
         icon.classList.add('fa-times');
     } else {
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     }
 });
 
 // Close menu when clicking on overlay
 overlay.addEventListener('click', function() {
     nav.classList.remove('active');
     overlay.classList.remove('active');
     
     const icon = mobileMenuBtn.querySelector('i');
     icon.classList.remove('fa-times');
     icon.classList.add('fa-bars');
 });
 
 // Close menu when clicking on nav links
 const navLinks = document.querySelectorAll('nav ul li a');
 navLinks.forEach(link => {
     link.addEventListener('click', function() {
         nav.classList.remove('active');
         overlay.classList.remove('active');
         
         const icon = mobileMenuBtn.querySelector('i');
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     });
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             window.scrollTo({
                 top: target.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });