import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Button from './Button';

export default function FeedbackItem({onOpen,title,description,votesCount}) {
  return (
    <a href='' 
    onClick={e => {e.preventDefault();onOpen();}} 
    className="flex gap-8 items-center my-4">

    <div>
    <h2 className="font-bold">{title}</h2>
    <p className="text-grey-600 text-sm">{description}</p>
    </div>

     
   

   
           <Button primary>
               <FaArrowUp className="mr-2" /> {votesCount}
           </Button>
       

   </a>
  )
}
