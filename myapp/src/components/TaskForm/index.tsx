import React, { useContext, useState } from 'react'
import './style.css'
import {tasksContext} from '../../context/tasksContext'

const TaskForm = () => {
    const sampleAppContext=useContext(tasksContext)
    const [input, setInput] = useState('')
    return (<>
        <h1 className='h1'>ToDo List </h1>
        <p className='p'>Today I need to ✏️</p>
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter your task..." className="task" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className='add' onClick={() => { input && sampleAppContext?.handleAddingTask(input); setInput('') }}><i className="fal fa-plus"></i></button>
        </form>
    </>)
}
export default TaskForm;