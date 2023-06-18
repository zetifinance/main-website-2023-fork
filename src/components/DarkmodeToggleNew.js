import React, { useState, useEffect } from 'react';

const LightModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('lightMode');
    setIsLightMode(storedMode === 'true');
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    localStorage.setItem('lightMode', newMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [isLightMode]);

  return (
    <button onClick={toggleMode}>
      {isLightMode ? '☀️' : '☾'}
    </button>
  );
};

export default LightModeToggle;