import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import OtherPage from './pages/OtherPage';

import Cursor from './components/Cursor/Cursor';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('cursorDefault');

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
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const cursorLarge = () => setCursorVariant('cursorResizeL');
  const cursorMedium = () => setCursorVariant('cursorResizeM');
  const cursorReset = () => setCursorVariant('cursorDefault');

  const variants = {
    cursorDefault: {
      x: position.x,
      y: position.y,
    },
    cursorResizeL: {
      height: 200,
      width: 200,
      x: position.x - 100,
      y: position.y - 100,
    },
    cursorResizeM: {
      height: 100,
      width: 100,
      x: position.x - 50,
      y: position.y - 50,
    },
  };

  return (
    <>
      <Cursor
        cursorVariant={cursorVariant}
        variants={variants}
        position={position}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div className='App'>
                <nav>
                  <Link to='/'>Home kindo</Link> |{' '}
                  <Link
                    to='otherpage'
                    onMouseEnter={cursorMedium}
                    onMouseLeave={cursorReset}
                  >
                    <>&nbsp;</>
                  </Link>
                </nav>
                <div className='page_top'>
                  <h1
                    className='title'
                    onMouseEnter={cursorLarge}
                    onMouseLeave={cursorReset}
                  >
                    [kɹiːˌe͡ɪtˈɪvɪti]
                  </h1>
                </div>

                <div className='content_wrapper'>
                  <div className='left_side'>
                    <h2 onMouseEnter={cursorMedium} onMouseLeave={cursorReset}>
                      Custom cursor invert on hover
                    </h2>
                  </div>
                  <div className='right_side'>
                    <h4>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Porro repudiandae voluptatum debitis, explicabo sit
                      laboriosam molestias vel rerum dicta doloribus incidunt
                      obcaecati ex aliquid necessitatibus nemo, iure iste! Esse,
                      illo, rem a inventore nobis consequuntur corrupti totam
                      vel nesciunt saepe adipisci alias qui velit laborum.
                      Exercitationem amet quidem excepturi quas.
                    </h4>
                  </div>
                </div>
              </div>
            }
          />
          <Route path='/otherpage' element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
