// Fix hamburger menu not closing when clicking anchor links
(function() {
  'use strict';

  function closeMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle && mobileMenuToggle.checked) {
      mobileMenuToggle.checked = false;
      
      // Also trigger change event to ensure any listeners are notified
      const event = new Event('change', { bubbles: true });
      mobileMenuToggle.dispatchEvent(event);
    }
  }

  function init() {
    // Use event delegation on the document for better reliability
    document.addEventListener('click', function(e) {
      // Check if clicked element is a link
      const link = e.target.closest('a');
      if (!link) return;
      
      // Check if it's an anchor link (starts with /#)
      const href = link.getAttribute('href');
      if (href && href.startsWith('/#')) {
        // Small delay to let the navigation happen first
        setTimeout(closeMenu, 100);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
