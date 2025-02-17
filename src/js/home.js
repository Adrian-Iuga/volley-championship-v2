document.addEventListener('DOMContentLoaded', (event) => {
    // Define the required variables and elements
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-inner img');
    const totalImages = images.length;
    let index = 0;

    // Function to show the next image in the carousel
    function showNextImage() {
        index = (index + 1) % totalImages;
        console.log('Next Image Index:', index);
        updateCarousel();
    }

    // Function to show the previous image in the carousel
    function showPrevImage() {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    // Function to update the carousel position
    function updateCarousel() {
        const translateX = -index * 100;
        console.log(`Index: ${index}, translateX: ${translateX}`);
        carouselInner.style.transform = `translateX(${translateX}%)`;
    }

    // Add event listeners to buttons
    document.querySelector('.carousel-button.next').addEventListener('click', showNextImage);
    document.querySelector('.carousel-button.prev').addEventListener('click', showPrevImage);

    // Automatically change image every 3 seconds
    setInterval(showNextImage, 3000); // Change image every 3 seconds
});
