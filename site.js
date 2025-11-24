// Random loading time: 1 to 3 seconds
const randomDelay = Math.floor(Math.random() * 3000) + 1000;

// Wait for random delay, then redirect
setTimeout(() => {
    window.location.href = "https://www.google.com";
}, randomDelay);
