import React, { useState } from 'react';
import Gifs from './Gifs';
import './index.scss';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <div className="container">
        <form className="form">
          <label className="form__label" htmlFor="search-bar">
            GIF Finder
          </label>
          <input
            className="form__input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        </form>
        <Gifs value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
