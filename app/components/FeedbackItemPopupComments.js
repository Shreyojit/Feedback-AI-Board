import React, { useState } from 'react'
import Button from './Button'
import Avatar from './Avatar'

export default function FeedbackItemPopupComments() {
    const [commentText,setCommentText] = useState('')
  return (
    <div className='p-8'>
        <div className='flex gap-4 mb-8'>
            <Avatar/>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </p>
                <div className='text-gray-400 mt-2 text-sm'>Annonymous a few sec ago</div>
            </div>

        </div>
        <form>
            <textarea className='border rounded-md w-full p-2' placeholder='Let us know what u think..' 
            onChange={e=> setCommentText(e.target.value)}
            value={commentText}/>

            
            <div className='
            flex justify-end gap-2 mt-2'>
                <Button>Attach Files</Button>
                <Button primary disabled={commentText===''}>Comment</Button>
            </div>
        </form>

    </div>
  )
}
