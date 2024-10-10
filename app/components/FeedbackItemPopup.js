import React from 'react'
import Popup from './Popup'
import Button from './Button'
import { FaArrowUp } from 'react-icons/fa'
import FeedbackItemPopupComments from './FeedbackItemPopupComments'

export default function FeedbackItemPopup({title,description,setShow,votesCount}) {
  return (
   <Popup title={''} setShow={setShow}>
    <div className='p-4'>
    <h2 className='text-lg font-bold mb-2'>{title}</h2>
    <p>
        {description}
    </p>
 
    <div className='flex justify-end bg-gray-200 px-4 py-2'>
    
    <Button primary>
        <FaArrowUp className="mr-2"/>
        Upvote {votesCount}
        </Button>
    </div>

   
    </div>
    <div>
        <FeedbackItemPopupComments/>
    </div>
    
   </Popup>
  )
}
