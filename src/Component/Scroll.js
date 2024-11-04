import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
    {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className=" w-full bg-amazon_blue-Scroll text-white text-lg font-bold py-3 px-6  hover:bg-amazon_blue-Scroll transition duration-300"
        >
            Back to Top
        {/* <FaArrowUp /> */}
        </button>
      )}
    </div>
  );
};

export default BackToTop;
