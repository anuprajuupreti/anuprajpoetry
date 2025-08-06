document.addEventListener('DOMContentLoaded', function() {
    // Header functionality
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Scroll animations
    const poemCards = document.querySelectorAll('.poem-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    poemCards.forEach(card => {
        observer.observe(card);
    });
    
    // Sunrise animation intensity based on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const sunriseBg = document.querySelector('.sunrise-bg');
        const opacity = Math.min(scrollPosition / 1000, 0.7);
        sunriseBg.style.opacity = 1 - opacity;
    });
    
    // PDF download button functionality
    const downloadBtn = document.querySelector('[download]');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Show loading state
            this.style.pointerEvents = 'none';
            this.textContent = 'डाउनलोड हुँदै...';
            
            // Simulate download process
            setTimeout(() => {
                this.textContent = 'PDF डाउनलोड गर्नुहोस्';
                this.style.pointerEvents = 'auto';
                
                // In a real implementation, this would trigger the file download
                console.log('Downloading Sapana Saundarya PDF...');
                
                // Show success message
                showNotification('PDF सफलतापूर्वक डाउनलोड भयो!', 'success');
            }, 2000);
        });
    }
    
    // Flipbook button functionality
    const flipbookBtn = document.getElementById('flipbook-btn');
    if(flipbookBtn) {
        flipbookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading overlay
            showFlipbookLoading();
            
            // Simulate flipbook loading
            setTimeout(() => {
                hideFlipbookLoading();
                showNotification('Flipbook लोड हुँदै छ...', 'info');
                
                // In a real implementation, this would open the flipbook
                console.log('Opening Flipbook...');
            }, 3000);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    

    
    // Add hover effects to poem cards
    poemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Add click to copy functionality for poems
    poemCards.forEach(card => {
        const poemText = card.querySelector('.poem-text');
        if (poemText) {
            card.addEventListener('click', function() {
                const textToCopy = poemText.textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showNotification('कविता कपी गरियो!', 'success');
                }).catch(() => {
                    showNotification('कपी गर्न सकिएन', 'error');
                });
            });
            
            // Add visual feedback
            card.style.cursor = 'pointer';
            card.title = 'कविता कपी गर्न क्लिक गर्नुहोस्';
        }
    });
});

// Loading overlay functions
function showFlipbookLoading() {
    let loadingOverlay = document.querySelector('.flipbook-loading');
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'flipbook-loading';
        loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(loadingOverlay);
    }
    loadingOverlay.classList.add('show');
}

function hideFlipbookLoading() {
    const loadingOverlay = document.querySelector('.flipbook-loading');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('show');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: 'Kalimati', sans-serif;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + D to download PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const downloadBtn = document.querySelector('[download]');
        if (downloadBtn) {
            downloadBtn.click();
        }
    }
    
    // Escape key to hide loading overlay
    if (e.key === 'Escape') {
        hideFlipbookLoading();
    }
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.poem-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    const scrollPosition = window.pageYOffset;
    const sunriseBg = document.querySelector('.sunrise-bg');
    const opacity = Math.min(scrollPosition / 1000, 0.7);
    sunriseBg.style.opacity = 1 - opacity;
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler); 