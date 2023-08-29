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