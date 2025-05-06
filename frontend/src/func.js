/* Main JavaScript file for WASAText application */

// Import page-specific scripts
import './js/login.js';
import './js/conversations.js';
import './js/chat.js';
import './js/profile.js';
import './js/group.js';

// Import API services
import './services/api.js';

// Common functions
function getToken() {
    // Get authentication token from local storage
}

function handleApiError(error) {
    // Common error handling
}

// Export common functions
export { getToken, handleApiError };
