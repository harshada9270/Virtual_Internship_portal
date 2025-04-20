// Check if user is logged in and is admin
if (localStorage.getItem('isLoggedIn') !== 'true' || localStorage.getItem('userType') !== 'admin') {
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

// Function to save internships to localStorage
function saveInternships(internships) {
    localStorage.setItem('internships', JSON.stringify(internships));
}

// Function to display internships in admin view
function displayAdminInternships() {
    const internshipList = document.getElementById('adminInternshipList');
    internshipList.innerHTML = '';

    const internships = getInternships();
    internships.forEach((internship, index) => {
        const card = document.createElement('div');
        card.className = 'admin-internship-card';
        card.innerHTML = `
            <h3>${internship.title}</h3>
            <p><strong>Company:</strong> ${internship.company}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <p><strong>Duration:</strong> ${internship.duration}</p>
            <p>${internship.description}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        internshipList.appendChild(card);
    });

    // Add delete event listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteInternship(index);
        });
    });
}

// Function to delete an internship
function deleteInternship(index) {
    const internships = getInternships();
    internships.splice(index, 1);
    saveInternships(internships);
    displayAdminInternships();
}

// Handle form submission for adding new internships
document.getElementById('addInternshipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newInternship = {
        id: Date.now(), // Unique ID
        title: document.getElementById('title').value,
        company: document.getElementById('company').value,
        location: document.getElementById('location').value,
        duration: document.getElementById('duration').value,
        description: document.getElementById('description').value
    };

    const internships = getInternships();
    internships.push(newInternship);
    saveInternships(internships);
    
    // Reset form and update display
    this.reset();
    displayAdminInternships();
    alert('Internship added successfully!');
});

// Initialize admin page
displayAdminInternships(); 