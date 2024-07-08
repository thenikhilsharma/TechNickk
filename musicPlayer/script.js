const imageContainer = document.getElementsByClassName("card");
const hoverButton = document.getElementsByClassName("play");

imageContainer.addEventListener('mouseover', function () {
    hoverButton.style.opacity = '1';
    hoverButton.style.pointerEvents = 'auto';
});

imageContainer.addEventListener('mouseout', function () {
    hoverButton.style.opacity = '0';
    hoverButton.style.pointerEvents = 'none';
});