
// theme toggle
const themeButton = document.querySelector('.theme-button');

 themeButton.addEventListener('click', () => {
    themeButton.parentElement.classList.toggle('dark-mode'); 
    // parent element is the body
});