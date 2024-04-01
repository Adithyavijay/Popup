/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { X,ArrowDownToLine } from 'lucide-react';
import { useRef } from 'react';

const Popup = ({onClose}) => {
  const modalRef=useRef();
  
  const closeModal=(e)=>{
   if(modalRef.current===e.target){
      onClose();
   }
  }
  return (
    <div ref={modalRef} onClick= {closeModal} className="text-white fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
        <div className='flex flex-col'>
            <button onClick={onClose} className='place-self-end'><X/></button>
            <div className="border border-blue-100 py-8 px-10 bg-indigo-500 rounded-xl flex flex-col gap-5  ">
                <h1 className=" font-extrabold text-3xl ">Download Free Ebook</h1>

                <hr />
                <p className='text-xl font-bold max-w-72 text-center'>Want to learn How to crack Web development Interviews like a pro!</p>
                <input
                 type="text"  
                 placeholder='Continue with mobile '
                 required 
                 className='text-black px-3 py-2 rounded-lg w-full'
                />
                
                <button className='flex border border-black py-2 px-1 justify-center bg-black gap-2 font-medium rounded-lg  w-52 mx-auto'><ArrowDownToLine/>Download ebook</button>
            </div>
    
        </div>
    
    </div>
  )
}

export default Popup;   