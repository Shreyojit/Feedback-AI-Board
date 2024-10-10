import React from 'react'
import Button from './Button'
import { MdCancel, MdEdit } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import Popup from './Popup';
export default function FeedbackFormPopup({setShow}) {
  return (
    
    <Popup setShow={setShow} title={'Make a suggestion'}>
      <form className='p-8'>
          <label className='block mt-4 mb-1 text-slate-700'>
            A short, descriptive title
          </label>
          <input 
            className='w-full border p-2 rounded-md' 
            type='text' 
            placeholder='A short descriptive title' 
          />

          <label className='block mt-4 mb-1 text-slate-700'>
            Details 
          </label>
          <textarea 
            className='w-full border p-2 rounded-md' 
            placeholder='Please include any details'>
          </textarea>

          <div className="flex gap-2 mt-2 justify-end">
            <Button>
              Attach files
            </Button>
            <Button primary onClick={() => setShow(false)}>
              Create Post
            </Button>
          </div>
        </form>
    </Popup>

  )
}
