// ⚙️ CONFIGURATION - Replace with your website URL
const SITE_URL = "https://new-bilal-mini-02994ac5b325.herokuapp.com";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const maintenance = document.getElementById('maintenance');
    const iframe = document.getElementById('site-frame');
    
    // Set iframe source
    iframe.src = SITE_URL;
    
    let iframeLoaded = false;
    let iframeBlocked = false;
    
    // Check if iframe loads successfully
    iframe.onload = function() {
        iframeLoaded = true;
        
        // Hide loader and show iframe
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
                iframe.classList.add('active');
            }, 500);
        }, 800);
    };
    
    // Detect if iframe is blocked or fails to load
    iframe.onerror = function() {
        iframeBlocked = true;
        showMaintenance();
    };
    
    // Fallback: If iframe doesn't load within 5 seconds, show maintenance
    setTimeout(() => {
        if (!iframeLoaded && !iframeBlocked) {
            // Try to check if iframe content is accessible
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (!iframeDoc || iframeDoc.readyState !== 'complete') {
                    showMaintenance();
                }
            } catch (e) {
                // If we can't access iframe (blocked by X-Frame-Options), show maintenance
                showMaintenance();
            }
        }
    }, 5000);
    
    function showMaintenance() {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            maintenance.classList.add('active');
        }, 500);
    }
});
