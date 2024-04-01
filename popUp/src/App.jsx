    // eslint-disable-next-line no-unused-vars
    import Popup from "./components/Popup";
    import { useState } from "react";

    function App(){
        const [showModal,setShowModal]=useState(false);
        return (
        <div className="h-screen w-screen flex  flex-col items-center gap-3 bg-slate-900 ">
            <h1 className="text-4xl text-white py-2">POP UP MODAL</h1>
            <button onClick={()=>{setShowModal(true)}} className="text-lg border  border-white  py-2 px-3 text-white bg-blue-500 hover:focus:to-white rounded-md">Sign in</button>
            { showModal && <Popup onClose={()=>{setShowModal(false)}}/> } 
        </div>  
        )   
    }
    export default App      