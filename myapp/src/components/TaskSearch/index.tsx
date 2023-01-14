import React, { useContext, useState } from 'react'
import  './style.css'
import {tasksContext} from '../../context/tasksContext'
const TaskSearch:React.FC = () => {
    const sampleAppContext=useContext(tasksContext)
    const [input, setInput] = useState('')
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <input type="text" placeholder="search..." 
    className="search" id="search" value={input} onChange={(e) => {
        setInput(e.target.value); input && sampleAppContext?.handleSearch(input); input && sampleAppContext?.setIsSearching(true)
    }} />
       
        <button onClick={() => { setInput(''); sampleAppContext?.setIsSearching(false) }}><i className="fa-solid fa-arrows-rotate"></i></button></div >

}
export default TaskSearch;