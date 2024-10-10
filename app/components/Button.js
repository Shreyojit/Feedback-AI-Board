import React from 'react';

export default function Button(props) {
  return (
    <button 
      {...props} 
      disabled={props.disabled}
      className={`py-1 px-4 rounded-md text-opacity-90 flex items-center
        ${props.primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
        ${props.disabled ? ' text-opacity-50 bg-opacity-50 cursor-not-allowed' : ''}`}
    >
      {props.children}
    </button>
  );
}
