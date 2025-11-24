// Random loading time: 1 to 3 seconds
const randomDelay = Math.floor(Math.random() * 3000) + 1000;

const loader = document.getElementById('loader');
const iframe = document.getElementById('site-frame');

// Set iframe source
iframe.src = "https://www.instagram.com";

// After random delay, hide loader and show iframe
setTimeout(() => {
    loader.classList.add('hidden');
    iframe.classList.add('active');
}, randomDelay);
