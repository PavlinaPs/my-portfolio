
// theme toggle
const themeButton = document.querySelector('.theme__button');
const body = document.querySelector('body');

 themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
});