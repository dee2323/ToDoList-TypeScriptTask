import React, { useContext, useState } from 'react'
import { tasksContext } from '../../context/tasksContext'
import Overlay from '../Overlay/index'
import  './style.css'
const TasksList:React.FC = () => {
    const sampleAppContext=useContext(tasksContext)
    const [showOVerlay, setShowOverlay] = useState(false)
    const [id, setId] = useState('')


    const listTasks = sampleAppContext?.isSearching && sampleAppContext.tasks.length == 0 ? <div style={{ textAlign: 'center', color: 'red' }}>No such tasks</div> : (sampleAppContext?.tasks.map(task => (<li key={task.id}>
        <p className={task.isCompleted  ?'complete':''}>{task.task}</p>
        <button onClick={() =>sampleAppContext?.handleCompletion(task.id)} 
        className="complete"><i className="far fa-check-circle"></i></button> 
        <button type='submit' className="delete" onClick={() => { setId(task.id); setShowOverlay(true); }}><i className="fas fa-trash-alt"></i></button>
    </li>)))
    return (<ul className='todos' id="todos">
        {listTasks}
        {showOVerlay && <Overlay setShowOverlay={setShowOverlay} id={id}
            
        />}

    </ul>)
}
export default TasksList;