// Typing Animation for Co-Mission Slogan
(function() {
  'use strict';

  const words = ['Connection', 'Cooperation', 'Collaboration', 'Cocreation', 'Consciousness'];
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character when deleting
  const normalDelay = 3000; // 3 seconds for normal words
  const lastWordDelay = 6000; // 6 seconds for the last word
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let element = null;

  function init() {
    element = document.getElementById('slogan-word');
    if (!element) return;
    
    // Start the typing animation
    type();
  }

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove character
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to next word
        setTimeout(type, 500); // Pause before typing next word
        return;
      }
      
      setTimeout(type, deletingSpeed);
    } else {
      // Add character
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentWord.length) {
        // Word complete - decide how long to wait
        const isLastWord = wordIndex === words.length - 1;
        const delay = isLastWord ? lastWordDelay : normalDelay;
        
        isDeleting = true;
        setTimeout(type, delay);
        return;
      }
      
      setTimeout(type, typingSpeed);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
