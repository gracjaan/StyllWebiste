// JavaScript code
const pages = document.querySelectorAll('.page-1');
const dots = document.querySelectorAll('.dot');

// Create an Intersection Observer to track the visibility of pages
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Find the index of the visible page
        const pageIndex = Array.from(pages).indexOf(entry.target);

        // Update the selected dot
        dots.forEach((dot, index) => {
          if (index === pageIndex) {
            dot.classList.add('selected-dot');
          } else {
            dot.classList.remove('selected-dot');
          }
        });
      }
    });
  },
  {
    root: document.querySelector('.scrollable-content-wrapper'),
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  }
);

// Observe each page
pages.forEach((page) => {
  observer.observe(page);
});

// Add click event listeners to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Scroll to the corresponding page
    pages[index].scrollIntoView({
      behavior: 'smooth', // Use 'auto' for immediate scroll
    });
  });
});





const screens = document.querySelectorAll('.home-wrapper');
const indicators = document.querySelectorAll('.navbar-text');

// Create an Intersection Observer to track the visibility of pages
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Find the index of the visible page
        const pageIndex = Array.from(screens).indexOf(entry.target);

        // Update the selected dot
        indicators.forEach((indicator, index) => {
          if (index === pageIndex) {
            indicator.classList.add('navbar-text-selected');
            indicator.classList.remove('navbar-text');
          } else {
            indicator.classList.remove('navbar-text-selected');
            indicator.classList.add('navbar-text');
          }
        });
      }
    });
  },
  {
    root: document.querySelector('.scrollable-mid-wrapper'),
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  }
);

// Observe each page
screens.forEach((screen) => {
  observer2.observe(screen);
});

// Add click event listeners to the dots
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Scroll to the corresponding page
    screens[index].scrollIntoView({
      behavior: 'smooth', // Use 'auto' for immediate scroll
    });
  });
});

const navbarToggle = document.getElementById('navbar-toggle');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

navbarToggle.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.animation = 'slideUp 0.9s ease'; // Slide up animation
  modal.addEventListener('animationend', () => {
    if (modal.style.animationName === 'slideUp') {
      modal.style.display = 'none';
      modal.style.animation = 'none';
    }
  });
});