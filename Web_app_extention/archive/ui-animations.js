// Enhanced UI animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Button click animations with loading state
    document.querySelectorAll('.launch-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Don't add loading state to multi-tool button
            if (this.id !== 'multiToolLaunchBtn') {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 800);
            }
        });
    });
    
    // Staggered animation for cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    entry.target.style.opacity = 1;
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Apply to all link cards
    document.querySelectorAll('.link-card').forEach(card => {
        card.style.opacity = 0;
        observer.observe(card);
    });
    
    // Textarea character counter
    document.querySelectorAll('textarea').forEach(textarea => {
        // Create counter element
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.textContent = '0 items';
        textarea.parentNode.insertBefore(counter, textarea.nextSibling);
        
        // Update counter on input
        textarea.addEventListener('input', function() {
            const lines = this.value.split('\n').filter(line => line.trim() !== '');
            counter.textContent = lines.length + (lines.length === 1 ? ' item' : ' items');
        });
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.launch-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});