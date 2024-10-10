import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import Button from './Button';

export default function Popup({ setShow, children, title }) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center'
      onClick={() => setShow(false)} // Close popup on background click
    >
      <button
        className='fixed top-4 right-4 text-red-600 hidden md:block'
        aria-label="Close"
        onClick={() => setShow(false)} // Close button click handler
      >
        <MdCancel className='h-6 w-6' aria-hidden="true" />
      </button>

      <div
        className='w-full h-full md:max-w-2xl md:h-auto md:mx-auto bg-white md:rounded-lg overflow-hidden'
        onClick={(event) => event.stopPropagation()} // Stop click propagation
      >
        <div className='py-4 text-center border-b flex justify-between items-center'>
          {/* Left icon for small screens */}
          <button
            className='md:hidden'
            onClick={() => setShow(false)} // Back button click handler
          >
            <IoArrowBack className='h-6 w-6 text-gray-600 mr-2' aria-hidden="true" />
          </button>
          
          <span className="flex-1 text-center">
            {title}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
