// Hardcoded credentials (for demo purposes only)
const credentials = {
    admin: {
        username: 'admin',
        password: 'admin123'
    },
    user: {
        username: 'user',
        password: 'user123'
    }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if (!userType) {
        alert('Please select a user type');
        return;
    }

    if (credentials[userType].username === username && credentials[userType].password === password) {
        // Store user type in localStorage
        localStorage.setItem('userType', userType);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect based on user type
        if (userType === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert('Invalid credentials');
    }
}); 