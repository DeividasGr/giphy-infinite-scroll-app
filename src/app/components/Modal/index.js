import React from 'react';
import './index.scss';

function Modal({ show, close, gif }) {
  const visible = show ? 'modal--visible' : '';
  return (
    <div className={`modal ${visible}`}>
      <span onClick={() => close()} className="modal__close">
        &times;
      </span>
      <img
        className="modal__content"
        src={gif.images.fixed_height.url}
        alt={gif.title}
      />
      <div className="modal__caption">{gif.title}</div>
    </div>
  );
}

export default Modal;
