function loadSite() {
    const urlInput = document.getElementById("siteInput").value.trim();
    const iframe = document.getElementById("siteFrame");
    const maintenance = document.getElementById("maintenance");

    if (!urlInput) {
        alert("https://www.google.com");
        return;
    }

    let url = urlInput;

    // Auto-add https if missing
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    iframe.src = url;

    iframe.classList.remove("hidden");
    maintenance.classList.add("hidden");

    // Detect if iframe fails
    iframe.onerror = function () {
        iframe.classList.add("hidden");
        maintenance.classList.remove("hidden");
    };

    // Extra timeout fallback (in case site hangs)
    setTimeout(() => {
        if (!iframe.contentWindow || iframe.contentWindow.length === 0) {
            iframe.classList.add("hidden");
            maintenance.classList.remove("hidden");
        }
    }, 4000);
}
