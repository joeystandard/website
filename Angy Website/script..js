// script.js

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    const popup = document.querySelector('.popup');
    const popupImage = document.querySelector('.popup-image');
    const closePopup = document.querySelector('.close-popup');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.src;
            popupImage.src = src;
            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
