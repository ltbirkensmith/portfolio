// Photography data - Replace with your actual images
const photographyData = [
    {
        src: 'https://placehold.co/800x600/6495ED/ffffff?text=Photo+1',
        title: 'Mountain Landscape',
        description: 'Early morning light cascading over mountain peaks, capturing the serene beauty of alpine wilderness.',
        camera: 'Canon EOS R5',
        location: 'Swiss Alps',
        date: 'June 2025'
    },
    {
        src: 'https://placehold.co/600x900/6495ED/ffffff?text=Photo+2',
        title: 'Urban Architecture',
        description: 'Geometric patterns and modern design elements in contemporary architecture.',
        camera: 'Sony A7IV',
        location: 'New York City',
        date: 'March 2025'
    },
    {
        src: 'https://placehold.co/900x600/6495ED/ffffff?text=Photo+3',
        title: 'Golden Hour Portrait',
        description: 'Natural light portrait showcasing the warmth and emotion of the golden hour.',
        camera: 'Fujifilm X-T4',
        location: 'California',
        date: 'August 2024'
    },
    {
        src: 'https://placehold.co/700x1000/6495ED/ffffff?text=Photo+4',
        title: 'Coastal Serenity',
        description: 'Long exposure of waves meeting rocky coastline at sunset.',
        camera: 'Nikon Z7',
        location: 'Oregon Coast',
        date: 'October 2024'
    },
    {
        src: 'https://placehold.co/1000x700/6495ED/ffffff?text=Photo+5',
        title: 'Street Life',
        description: 'Candid moments of everyday life in urban environments.',
        camera: 'Leica Q2',
        location: 'Tokyo',
        date: 'November 2024'
    },
    {
        src: 'https://placehold.co/800x800/6495ED/ffffff?text=Photo+6',
        title: 'Minimalist Composition',
        description: 'Exploring negative space and simplicity in composition.',
        camera: 'Canon EOS R5',
        location: 'Iceland',
        date: 'February 2025'
    },
    {
        src: 'https://placehold.co/600x800/6495ED/ffffff?text=Photo+7',
        title: 'Forest Depths',
        description: 'Dappled sunlight filtering through dense forest canopy.',
        camera: 'Sony A7IV',
        location: 'Pacific Northwest',
        date: 'May 2024'
    },
    {
        src: 'https://placehold.co/900x700/6495ED/ffffff?text=Photo+8',
        title: 'Architectural Detail',
        description: 'Intricate details of historical architecture and craftsmanship.',
        camera: 'Fujifilm X-T4',
        location: 'Barcelona',
        date: 'April 2025'
    },
    {
        src: 'https://placehold.co/800x1000/6495ED/ffffff?text=Photo+9',
        title: 'Desert Solitude',
        description: 'Vast landscapes and dramatic light in desert environments.',
        camera: 'Nikon Z7',
        location: 'Utah',
        date: 'September 2024'
    },
    {
        src: 'https://placehold.co/1000x600/6495ED/ffffff?text=Photo+10',
        title: 'City Nights',
        description: 'Urban landscapes illuminated by artificial light after dark.',
        camera: 'Sony A7IV',
        location: 'Hong Kong',
        date: 'December 2024'
    },
    {
        src: 'https://placehold.co/700x900/6495ED/ffffff?text=Photo+11',
        title: 'Wildlife Encounter',
        description: 'Capturing the essence of wildlife in their natural habitat.',
        camera: 'Canon EOS R5',
        location: 'Kenya',
        date: 'July 2024'
    },
    {
        src: 'https://placehold.co/900x900/6495ED/ffffff?text=Photo+12',
        title: 'Abstract Reflections',
        description: 'Playing with reflections and abstract forms in urban settings.',
        camera: 'Leica Q2',
        location: 'Berlin',
        date: 'January 2025'
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initPhotoGallery();
    initResumeToggle();
    initMobileMenu();
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
    });
}

// Initialize photo gallery (only on photography page)
function initPhotoGallery() {
    const gallery = document.getElementById('photoGallery');
    if (!gallery) return;
    
    photographyData.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `<img src="${photo.src}" alt="${photo.title}" loading="lazy">`;
        
        photoItem.addEventListener('click', function() {
            openPhotoModal(photo);
        });
        
        gallery.appendChild(photoItem);
    });
}

// Photo modal functionality
function openPhotoModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCamera = document.getElementById('modalCamera');
    const modalLocation = document.getElementById('modalLocation');
    const modalDate = document.getElementById('modalDate');
    
    if (!modal) return;
    
    modalImage.src = photo.src;
    modalImage.alt = photo.title;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.description;
    modalCamera.textContent = photo.camera;
    modalLocation.textContent = photo.location;
    modalDate.textContent = photo.date;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close photo modal
document.addEventListener('click', function(e) {
    const modal = document.getElementById('photoModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    if (e.target === modal || e.target === modalClose) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('photoModal');
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Resume language toggle
function initResumeToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const resumeEn = document.getElementById('resume-en');
    const resumeDe = document.getElementById('resume-de');
    
    if (toggleButtons.length === 0) return;
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide resume versions
            if (lang === 'en') {
                if (resumeEn) resumeEn.style.display = 'block';
                if (resumeDe) resumeDe.style.display = 'none';
            } else {
                if (resumeEn) resumeEn.style.display = 'none';
                if (resumeDe) resumeDe.style.display = 'block';
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuToggle || !navLinks) return;
    
    let isOpen = false;
    
    mobileMenuToggle.addEventListener('click', function() {
        isOpen = !isOpen;
        
        if (isOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.padding = '24px 40px';
            navLinks.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            navLinks.style.minWidth = '200px';
            navLinks.style.gap = '20px';
        } else {
            navLinks.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isOpen && !navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.style.display = 'none';
            isOpen = false;
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                isOpen = false;
            }
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation for elements
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and other elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .featured-card, .explore-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
