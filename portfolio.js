document.querySelector('.logo').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-btn').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Simple Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert('All fields must be filled out.');
        return false;
    }
    
    // Check if email is valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    alert('Message sent successfully!');
    return true;
}

// Progress Bars Animation
let progressAnimated = false;

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Animate progress bars when the section is in view
    if (!progressAnimated && skillsTop < windowHeight) {
        const progressBars = document.querySelectorAll('.progress-bar-inner');
        progressBars.forEach((bar, index) => {
            const percentages = ['95%', '85%', '70%']; // Define percentages for each skill
            bar.style.width = percentages[index];
            bar.style.animation = 'fillProgress 1.5s forwards';
        });
        progressAnimated = true;
    }
});
