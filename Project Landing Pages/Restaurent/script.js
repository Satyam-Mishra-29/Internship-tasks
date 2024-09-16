// NavBar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', function() {
    sidebar.style.right = '0'; 
});
closeBtn.addEventListener('click', function() {
    sidebar.style.right = '-250px'; 
});


// Section-One
let img = document.querySelector(".carousel-section > .carousel");
let arr = [
    "./Images/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.avif",
    "./Images/healthy-vegetable-soup-cooked-with-fresh-meat-generated-by-ai_188544-35382.jpg",
    "./Images/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.avif"
];

let index = 0;

let updateImage = () => {
    img.src = arr[index];
};


let autoSlide = setInterval(() => {
    index = (index + 1) % arr.length;
    updateImage();
}, 2000);


let resetInterval = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        index = (index + 1) % arr.length;
        updateImage();
    }, 2000);
};


let left = document.querySelector(".fa-chevron-left");
left.addEventListener("click", (e) => {
    index = (index - 1 + arr.length) % arr.length;
    updateImage();
    resetInterval(); 
});


// Image Slider
const carousel = document.querySelector('.carousel1');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
let cardWidth; 
let visibleCards; 
let maxScroll; 


function calculateCardWidth() {
    const card = document.querySelector('.card');
    return card.offsetWidth + 20; 
}

// Calculate the number of visible cards based on the container width
function calculateVisibleCards() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    cardWidth = calculateCardWidth(); 
    return Math.floor(containerWidth / cardWidth); 
}

// Recalculate the scroll limits based on screen size
function updateCarouselLimits() {
    visibleCards = calculateVisibleCards(); 
    const totalCards = document.querySelectorAll('.card').length; 
    maxScroll = cardWidth * (totalCards - visibleCards); 
}

// Scroll the carousel to the next card
function scrollNext() {
    if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth; 
        carousel.style.transform = `translateX(-${scrollAmount}px)`; 
    }
}

// Scroll the carousel to the previous card
function scrollPrev() {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth; 
        carousel.style.transform = `translateX(-${scrollAmount}px)`; 
    }
}

// Initialize the carousel on page load
function initializeCarousel() {
    scrollAmount = 0; 
    updateCarouselLimits(); 
    carousel.style.transform = 'translateX(0)'; 
}

// Add event listeners to buttons
nextBtn.addEventListener('click', scrollNext);
prevBtn.addEventListener('click', scrollPrev);

// Recalculate and update the carousel when the window is resized
window.addEventListener('resize', () => {
    initializeCarousel(); 
});

// Run the initial setup when the page loads
initializeCarousel();

