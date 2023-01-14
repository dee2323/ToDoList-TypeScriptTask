import React ,{useContext}from "react";
import './style.css'
import { tasksContext } from "../../context/tasksContext";
interface props{
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>, 
    id:string, 
}
const Overlay :React.FC<props>= ({setShowOverlay,id}:props) => {
    const sampleAppContext=useContext(tasksContext)
    return (<div className="overlay" id="overlay">
        <div className="confirm-box">
            <div>
                <p>Are you sure delete this task?</p>
            </div>
            <div className="confirmBtns">
                <button id="cancelDeleting" style={{ marginRight: '0.5rem' }} 
                onClick={() => { setShowOverlay(false) }}>
                    Cancel
                </button>
                <button id="confirmDeleting" style={{ backgroundColor: 'rgb(214, 133, 146)' }}
                 onClick={() => { sampleAppContext?.handleDeletingTask(id); setShowOverlay(false) }}>
                    Delete</button>
            </div>
        </div>
    </div >)
}
export default Overlay;