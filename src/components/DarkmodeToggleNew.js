import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const preferredDarkMode = localStorage.getItem('darkMode');

    if (preferredDarkMode !== null) {
      setDarkMode(JSON.parse(preferredDarkMode));
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkScheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    
    if (newDarkMode) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  };

  return (
    <div>
      <button type="button" onClick={toggleDarkMode}>
        {darkMode ? '☾' : '☀'}
      </button>
    </div>
  );
};

export default DarkModeToggle;