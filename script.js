document.getElementById('checkNowBtn').addEventListener('click', async () => {
    const statusSpan = document.getElementById('gatewayStatus');
    
    // Set a checking state so the user knows it's working
    statusSpan.innerText = "Checking...";
    statusSpan.className = ""; 

    try {
        // Fetch from the exact first-party endpoint your GTM script is trying to use
        const response = await fetch('/gtgmetric/?id=GTM-KL3PSV9D');

        // If the server responds with a success status (200-299), the gateway is active
        if (response.ok) {
            statusSpan.innerText = "Active";
            statusSpan.className = "active";
        } else {
            // If the server responds with a 404 or 500 error, it's inactive
            statusSpan.innerText = "Inactive";
            statusSpan.className = "inactive";
        }
    } catch (error) {
        // If the fetch fails entirely (e.g., endpoint doesn't exist or network error)
        statusSpan.innerText = "Inactive";
        statusSpan.className = "inactive";
    }
});