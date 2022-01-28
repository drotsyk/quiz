import React from 'react';
import './Modal.css'

export const Modal = ({setError}) => {
  return (
    <div className='modal'>
      <div className="modal__body">
        <h1 className='modal__title'>Error - list empty</h1>
        <button className='modal__btn' onClick={() => {
          setError(false)
        }}>Ok</button>
      </div>
    </div>
  );
};
