// Sample photography data - replace with your actual images
const photographyData = [
    {
        src: 'https://placehold.co/600x400/2d4059/ffffff?text=Photo+1',
        description: 'A beautiful landscape captured at golden hour, showcasing the interplay of light and shadow across the mountains.'
    },
    {
        src: 'https://placehold.co/400x600/2d4059/ffffff?text=Photo+2',
        description: 'Urban architecture study focusing on geometric patterns and modern design elements.'
    },
    {
        src: 'https://placehold.co/500x400/2d4059/ffffff?text=Photo+3',
        description: 'Portrait photography exploring human emotion and natural lighting techniques.'
    },
    {
        src: 'https://placehold.co/600x500/2d4059/ffffff?text=Photo+4',
        description: 'Nature macro photography revealing the intricate details of flora.'
    },
    {
        src: 'https://placehold.co/400x500/2d4059/ffffff?text=Photo+5',
        description: 'Street photography capturing candid moments of everyday life in the city.'
    },
    {
        src: 'https://placehold.co/600x400/2d4059/ffffff?text=Photo+6',
        description: 'Minimalist composition exploring negative space and artistic abstraction.'
    },
    {
        src: 'https://placehold.co/500x600/2d4059/ffffff?text=Photo+7',
        description: 'Long exposure photography showcasing motion and time in a single frame.'
    },
    {
        src: 'https://placehold.co/600x400/2d4059/ffffff?text=Photo+8',
        description: 'Documentary photography telling stories through visual narrative.'
    },
    {
        src: 'https://placehold.co/400x600/2d4059/ffffff?text=Photo+9',
        description: 'Black and white photography emphasizing contrast and tonal range.'
    },
    {
        src: 'https://placehold.co/600x500/2d4059/ffffff?text=Photo+10',
        description: 'Conceptual photography blending reality with artistic interpretation.'
    },
    {
        src: 'https://placehold.co/500x400/2d4059/ffffff?text=Photo+11',
        description: 'Travel photography documenting diverse cultures and landscapes.'
    },
    {
        src: 'https://placehold.co/400x500/2d4059/ffffff?text=Photo+12',
        description: 'Fine art photography pushing the boundaries of visual expression.'
    }
];

// Project details data
const projectDetails = {
    project1: {
        title: 'Project Name 1',
        description: `
            <p>This is a comprehensive engineering project that demonstrates advanced problem-solving capabilities and technical expertise. The project involved designing and implementing a complex system that addresses real-world challenges.</p>
            
            <h3>Technical Overview</h3>
            <p>The project utilizes cutting-edge technologies including modern frameworks, cloud infrastructure, and advanced algorithms. Key technical components include distributed systems architecture, real-time data processing, and scalable backend solutions.</p>
            
            <h3>Challenges & Solutions</h3>
            <p>One of the primary challenges was optimizing performance while maintaining system reliability. Through innovative approaches and iterative testing, we achieved a 40% improvement in processing speed while reducing resource consumption by 30%.</p>
            
            <h3>Impact & Results</h3>
            <p>The project has been successfully deployed and is currently serving thousands of users. It has received positive feedback for its intuitive interface and robust performance. Future enhancements are planned to expand functionality and reach.</p>
            
            <img src="https://placehold.co/900x600/2d4059/ffffff?text=Project+Detail+1" alt="Project Detail">
            
            <h3>Technologies Used</h3>
            <ul>
                <li>Python, JavaScript, TypeScript</li>
                <li>React, Node.js, Express</li>
                <li>PostgreSQL, MongoDB</li>
                <li>AWS, Docker, Kubernetes</li>
                <li>REST API, GraphQL</li>
            </ul>
        `
    },
    project2: {
        title: 'Project Name 2',
        description: `
            <p>This project represents a significant achievement in software engineering, focusing on creating an innovative solution for a complex industry problem. The system was built from the ground up with scalability and maintainability as core principles.</p>
            
            <h3>Project Goals</h3>
            <p>The primary objective was to create a platform that could handle high-volume transactions while maintaining data integrity and security. Additional goals included providing a seamless user experience and enabling real-time analytics.</p>
            
            <h3>Implementation Details</h3>
            <p>The architecture follows microservices patterns, with each service independently deployable and scalable. We implemented comprehensive testing strategies including unit tests, integration tests, and end-to-end testing to ensure reliability.</p>
            
            <img src="https://placehold.co/900x600/2d4059/ffffff?text=Project+Detail+2" alt="Project Detail">
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time data synchronization</li>
                <li>Advanced analytics dashboard</li>
                <li>Role-based access control</li>
                <li>Automated backup and recovery</li>
                <li>RESTful API with comprehensive documentation</li>
            </ul>
            
            <h3>Lessons Learned</h3>
            <p>This project taught valuable lessons about system design, team collaboration, and the importance of thorough documentation. The experience gained has been invaluable for subsequent projects.</p>
        `
    },
    project3: {
        title: 'Project Name 3',
        description: `
            <p>An ambitious engineering project that pushed the boundaries of what's possible with modern technology. This project showcases expertise in both theoretical computer science and practical software engineering.</p>
            
            <h3>Problem Statement</h3>
            <p>The challenge was to develop a system that could process large-scale data in near real-time while maintaining accuracy and reliability. Traditional approaches were insufficient for the scale and complexity required.</p>
            
            <h3>Solution Architecture</h3>
            <p>We designed a distributed system using event-driven architecture, enabling horizontal scaling and fault tolerance. The solution incorporates machine learning algorithms for intelligent data processing and prediction.</p>
            
            <img src="https://placehold.co/900x600/2d4059/ffffff?text=Project+Detail+3" alt="Project Detail">
            
            <h3>Technical Innovations</h3>
            <p>Several novel approaches were developed specifically for this project, including custom algorithms for data optimization and a unique caching strategy that significantly improved performance.</p>
            
            <h3>Results & Metrics</h3>
            <ul>
                <li>99.9% uptime achieved</li>
                <li>Processing speed increased by 60%</li>
                <li>Cost reduction of 45% compared to previous solution</li>
                <li>Successfully scaled to support 100,000+ concurrent users</li>
                <li>Recognized with industry award for innovation</li>
            </ul>
        `
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initPhotoGallery();
    initProjectModals();
    initResumeToggle();
    initContactForm();
    initSmoothScroll();
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize photo gallery with masonry-like layout
function initPhotoGallery() {
    const gallery = document.getElementById('photoGallery');
    
    photographyData.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${photo.src}" alt="Photo ${index + 1}">
            <div class="photo-overlay">
                <p>${photo.description.substring(0, 80)}...</p>
            </div>
        `;
        
        photoItem.addEventListener('click', function() {
            openPhotoModal(photo);
        });
        
        gallery.appendChild(photoItem);
    });
}

// Photo modal functionality
function openPhotoModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalDescription = document.getElementById('modalDescription');
    
    modalPhoto.src = photo.src;
    modalDescription.textContent = photo.description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close photo modal
document.addEventListener('click', function(e) {
    const modal = document.getElementById('photoModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (e.target === modal || e.target === modalClose) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Project modals
function initProjectModals() {
    const modalCloseBtn = document.querySelector('.modal-close-project');
    const projectModal = document.getElementById('projectModal');
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function openProject(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('projectModalContent');
    const project = projectDetails[projectId];
    
    if (project) {
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            ${project.description}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Resume language toggle
function initResumeToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const resumeEn = document.getElementById('resume-en');
    const resumeDe = document.getElementById('resume-de');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide resume versions
            if (lang === 'en') {
                resumeEn.style.display = 'block';
                resumeDe.style.display = 'none';
            } else {
                resumeEn.style.display = 'none';
                resumeDe.style.display = 'block';
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
        
        // In a real implementation, you might use fetch or axios to send the data:
        /*
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch(error => {
            alert('An error occurred. Please try again.');
        });
        */
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-item, .explore-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (basic implementation)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        navLinks.style.borderRadius = '8px';
    });
}
