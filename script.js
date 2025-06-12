// Set your special date here (year, month-1, day, hour, minute)
const specialDate = new Date(2025, 4, 23, 1, 14); // May 23, 2025, 01:14 AM

function calculateTimeElapsed() {
    const now = new Date();
    const difference = now.getTime() - specialDate.getTime();
    
    // If the date is in the future, show zeros
    if (difference < 0) {
        document.getElementById('years').textContent = '00';
        document.getElementById('months').textContent = '00';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the display with padded zeros
    document.getElementById('years').textContent = years.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize the counter
calculateTimeElapsed();

// Update every second
setInterval(calculateTimeElapsed, 1000);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to counter items
    const counterItems = document.querySelectorAll('.counter-item');
    
    counterItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click effect to photo
    const photoContainer = document.querySelector('.photo-container');
    
    photoContainer.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});