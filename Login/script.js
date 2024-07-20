document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        alert('Login successful!');
    } else {
        alert('Please enter a valid email and password.');
    }
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Forgot password functionality is not implemented yet.');
});

document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Register functionality is not implemented yet.');
});
