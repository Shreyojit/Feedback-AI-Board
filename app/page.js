'use client'
import Image from "next/image";
import { FaArrowUp } from 'react-icons/fa';
import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackFormPopup from "./components/FeedbackFormPopup";
import Button from "./components/Button";
import FeedbackItemPopup from "./components/FeedbackItemPopup";

export default function Home() {

  const[ showFeedbackPopupForm, setShowFeedbackPopupForm ] = useState(false);
  const[ showFeedbackPopupItem,setShowFeedbackPopupItem ] = useState(null);
  function openFeedbackPopupForm(){
    setShowFeedbackPopupForm(true);
  }
  function openFeedbackPopupItem(feedback){
    setShowFeedbackPopupItem(feedback);
  }


 



  const feedbacks = [
    {title:'Please post more videos', 
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      votesCount:80},

      {title:'Please post more videos2', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
        votesCount:40},

        {title:'Please post more videos3', 
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
          votesCount:50},

          {title:'Please post more videos4', 
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
            votesCount:60}

  ]

  return (
   <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8">
   <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
    <h1 className="font-bold text-xl">Feedback App</h1>
    <p className="text-opacity-90 text-slate-700">Help me decide what i should build next</p>
   </div>
   <div className="bg-gray-100 px-8 py-4 flex border-b">
    <div className="grow">
      
    </div>
    <div>
      <Button primary onClick={openFeedbackPopupForm} >
        Make a suggestion
      </Button>
   
   </div>
   </div>
   <div className="px-8 py-4">
{feedbacks.map(feedback => (
  <FeedbackItem 
  key={feedback.title}
  {...feedback} onOpen={() => openFeedbackPopupItem(feedback)}/>
))}

   </div>

   {showFeedbackPopupForm && (
        <FeedbackFormPopup setShow={setShowFeedbackPopupForm} />
      )}

{showFeedbackPopupItem && (
  <FeedbackItemPopup {...showFeedbackPopupItem}
  setShow={setShowFeedbackPopupItem}
  />
   
)}


   </main>
  );
}
