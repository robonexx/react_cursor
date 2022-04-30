import React, { useState, useEffect } from 'react';
import './App.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      /* style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }} */
    ></div>
  );
};

function App({ cursor }) {
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
      <div className='App'>
        <div className='page_top'>
          <h1>[kɹiːˌe͡ɪtˈɪvɪti]</h1>
        </div>

        <div className='content_wrapper'>
          <div className='left_side'>
            <h2>Custom cursor invert on hover</h2>
          </div>
          <div className='right_side'>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              repudiandae voluptatum debitis, explicabo sit laboriosam molestias
              vel rerum dicta doloribus incidunt obcaecati ex aliquid
              necessitatibus nemo, iure iste! Esse, illo, rem a inventore nobis
              consequuntur corrupti totam vel nesciunt saepe adipisci alias qui
              velit laborum. Exercitationem amet quidem excepturi quas.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
