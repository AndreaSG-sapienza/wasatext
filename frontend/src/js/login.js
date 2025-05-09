/* Login page JavaScript - Used in index.html */

// Login form handler
document.addEventListener('DOMContentLoaded', () => {
    // Login form functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Authentication functions
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    
    // Validate input
    if (!username || username.length < 3 || username.length > 16) {
        showError('Username must be between 3 and 16 characters');
        return;
    }
    
    // Call login API
    doLogin(username);
}

function doLogin(username) {
    // API call to login endpoint
    fetch('/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        // Store token in localStorage
        localStorage.setItem('userToken', data.identifier);
        localStorage.setItem('username', username);
        
        // Redirect to conversations page
        window.location.href = 'conversations.html';
    })
    .catch(error => {
        showError(error.message || 'An error occurred during login');
        console.error('Login error:', error);
    });
}

function showError(message) {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    } else {
        alert(message);
    }
}
