import React, { useState, useEffect } from 'react';
import './App.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className='cursor'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

function App({cursor}) {
  return (
    <>
      <Cursor
        cursor={cursor}
        onMouseMove={(e) => {
          const cursor = document.querySelector('.cursor');
          cursor.style.left = `${e.pageX}px`;
          cursor.style.top = `${e.pageY}px`;
        }}
      />
      <div className='App'></div>
    </>
  );
}

export default App;
