// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Set active link based on current page
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Check if user is logged in on page load
window.addEventListener('load', function() {
    setActiveLink();
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    const navLinks = document.getElementById('navLinks');
    const mobileLogoutContainer = document.getElementById('mobileLogoutContainer');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        
        // Desktop logout button
        navLinks.innerHTML = `
            <li style="display: flex; align-items: center; gap: 20px; list-style: none;">
                <span style="color: #1a1a1a; font-size: 14px; font-weight: 600;">Welcome, <strong>${user.firstname} ${user.lastname}</strong></span>
                <button id="logoutBtn" class="btn" style="background: linear-gradient(135deg, #513eff 0%, #0099ff 100%); cursor: pointer; padding: 12px 24px; font-weight: 700;">Log Out</button>
            </li>
        `;

        // Show mobile logout button
        mobileLogoutContainer.style.display = 'block';

        // Add logout functionality for desktop
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('rememberMe');
            alert('Logged out successfully!');
            window.location.href = 'signin.html';
        });

        // Add logout functionality for mobile
        mobileLogoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('rememberMe');
            alert('Logged out successfully!');
            window.location.href = 'signin.html';
        });
    }
});
