// Modal Functions
function openServiceModal(title, description, features) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    
    // IMPORTANT: Clear the modal BEFORE showing it
    modalTitle.textContent = '';
    modalDescription.textContent = '';
    modalFeatures.innerHTML = '';
    
    // Now populate with new content
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Create fresh feature list items
    if (Array.isArray(features) && features.length > 0) {
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature.trim();
            modalFeatures.appendChild(li);
        });
    }
    
    // Finally, show the modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    const modal = document.getElementById('serviceModal');
    if (event && event.target.id === 'serviceModal') {
        modal.classList.remove('active');
    } else if (!event) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}

// Attach event listeners to Learn More buttons
function attachLearnMoreListeners() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    
    learnMoreButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get the service card that contains this button
            const serviceCard = this.closest('.service-card');
            
            if (serviceCard) {
                // Read data attributes from the service card
                const title = serviceCard.getAttribute('data-title');
                const description = serviceCard.getAttribute('data-description');
                const featuresString = serviceCard.getAttribute('data-features');
                
                // Convert comma-separated features string to array
                const features = featuresString ? featuresString.split(',').map(f => f.trim()) : [];
                
                // Open modal with this service's data
                openServiceModal(title, description, features);
            }
        });
    });
}

// Get Started Form Functions - No longer needed, redirects to get-started.html instead

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

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
    attachLearnMoreListeners();
    
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
