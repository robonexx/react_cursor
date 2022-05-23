import React from 'react';

import './otherpage.scss';

const list = [
  {
    title: 'E.T Phone Home',
  },
  {
    title: 'HAsta LA VISTA',
  },
  {
    title: 'Yippie Kai Yey MF',
  },
  {
    title: 'Fear the Darkside',
  },
  {
    title: 'The force is Strong',
  },
  {
    title: 'My precious',
  },
];

export default function OhterPage() {
  return (
    <div className='otherpage'>
      <div className='bg'>
       
      </div>
      <span className='custom-btn'>
        <a href='/'>Back</a>
      </span>
      <ul>
        {list.map((l, i) => (
          <div key={i}>
            <li>
              <a href='#' data-text={l.title}>{l.title}</a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
