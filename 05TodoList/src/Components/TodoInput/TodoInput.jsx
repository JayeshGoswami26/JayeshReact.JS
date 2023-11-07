import React, { useEffect, useRef, useState } from 'react';

function TodoInput() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // If the target element is in the viewport, set isVisible to true
            if (entry.isIntersecting) {
              setIsVisible(true);
            }else{ 
              setIsVisible(false);
             }
          });
        });
    
        // Start observing the target element
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
      }, []);
    

  return (
    <>
            <div className='text-5xl text-center bg-gray-500 p-11 text-white h-96'>TodoInput</div>
        <div
        ref={elementRef}
        className={`transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-80 opacity-0'
        }`}>
            <p className="text-4xl text-center mt-96 h-96">Your Content Goes Here</p>
        </div>
    </>
  )
}

export default TodoInput