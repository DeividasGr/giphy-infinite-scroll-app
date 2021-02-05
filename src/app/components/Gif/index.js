import React, { useState } from 'react';
import Modal from '../Modal';
import './index.scss';

function Gif({ gif }) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <div className="gifs__single">
        <img
          onClick={() => showModal()}
          className="gifs__image"
          src={gif.images.fixed_height.url}
          alt={gif.title}
        />
      </div>
      <Modal close={() => setShow(false)} gif={gif} show={show} />
    </>
  );
}

export default Gif;
