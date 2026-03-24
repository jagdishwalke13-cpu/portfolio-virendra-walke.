const carouselWrapper = document.getElementById('carouselWrapper');
const cards = document.querySelectorAll('.carousel-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let startX = 0;

// Initialize Dots
cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Update Carousel State
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    currentTranslate = currentIndex * -cardWidth;
    prevTranslate = currentTranslate;
    setCarouselPosition();
    
    // Update active card class
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function setCarouselPosition() {
    carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1; // Loop to end
    }
    updateCarousel();
}

// Button Events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Drag / Swipe Logic
carouselWrapper.addEventListener('mousedown', dragStart);
carouselWrapper.addEventListener('touchstart', dragStart);
carouselWrapper.addEventListener('mouseup', dragEnd);
carouselWrapper.addEventListener('touchend', dragEnd);
carouselWrapper.addEventListener('mousemove', dragAction);
carouselWrapper.addEventListener('touchmove', dragAction);
carouselWrapper.addEventListener('mouseleave', dragEnd);

function dragStart(e) {
    isDragging = true;
    startX = getPositionX(e);
    startPos = currentTranslate;
    carouselWrapper.style.transition = 'none'; // Disable transition during drag
    animationID = requestAnimationFrame(animation);
}

function dragAction(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    currentTranslate = startPos + diff;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    carouselWrapper.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    
    const movedBy = currentTranslate - startPos;
    
    // Threshold for swipe (100px)
    if (movedBy < -100 && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
    }
    
    updateCarousel();
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function animation() {
    setCarouselPosition();
    if (isDragging) requestAnimationFrame(animation);
}

// Handle Resize
window.addEventListener('resize', updateCarousel);

// Initial call
updateCarousel();
