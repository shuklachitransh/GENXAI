import React, { useEffect } from 'react';

const IntroductionSound = () => {
  useEffect(() => {
    // Function to play the introduction sound
    const playSound = () => {
      const audio = new Audio('/welcome.mp3');
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    };

    // Add an event listener for user interaction
    const handleUserInteraction = () => {
      playSound();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return <div>{/* This component can be empty or contain other elements */}</div>;
};

export default IntroductionSound;
