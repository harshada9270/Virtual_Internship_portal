// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    window.location.href = 'login.html';
});

// Function to get internships from localStorage
function getInternships() {
    const internships = localStorage.getItem('internships');
    return internships ? JSON.parse(internships) : [];
}

// Function to display internships
function displayInternships() {
    const internshipList = document.getElementById('internshipList');
    internshipList.innerHTML = '';

    const internships = getInternships();
    internships.forEach(internship => {
        const card = document.createElement('div');
        card.className = 'internship-card';
        card.innerHTML = `
            <h3>${internship.title}</h3>
            <p><strong>Company:</strong> ${internship.company}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <p><strong>Duration:</strong> ${internship.duration}</p>
            <p>${internship.description}</p>
        `;
        internshipList.appendChild(card);
    });
}

// Function to populate internship dropdown
function populateInternshipDropdown() {
    const select = document.getElementById('internship');
    select.innerHTML = '<option value="">Choose an internship</option>';
    
    const internships = getInternships();
    internships.forEach(internship => {
        const option = document.createElement('option');
        option.value = internship.id;
        option.textContent = `${internship.title} - ${internship.company}`;
        select.appendChild(option);
    });
}

// Form submission handler
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        internship: document.getElementById('internship').value,
        resume: document.getElementById('resume').files[0]
    };

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Application submitted successfully! We will contact you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayInternships();
    populateInternshipDropdown();
}); 