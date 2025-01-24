import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Detect scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 300) { // Show the button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener to track scroll position
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    isVisible && ( // Only render the button if isVisible is true
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-4 p-4 bg-primary text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none hidden sm:block"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
