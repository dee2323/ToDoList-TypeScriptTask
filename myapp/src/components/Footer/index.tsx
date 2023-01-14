import React, { useContext } from 'react'
import { tasksContext } from '../../context/tasksContext'
import  './style.css'
const Footer :React.FC= () => {
   const sampleAppContext=useContext(tasksContext)

    let counter = 0;
   sampleAppContext?.tasks.length && sampleAppContext.tasks.map(task => task.isCompleted ?
     counter++ : '')
    return (
        <div className='counterContainer'>
            <div className="count-tasks">Tasks {sampleAppContext?.tasks.length}</div>
            <div className="completed-tasks">Completed Tasks {counter}</div>
        </div>)
}
export default Footer;