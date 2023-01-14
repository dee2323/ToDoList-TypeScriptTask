import React, { useState } from 'react'
import './style.css'
import Footer from '../Footer/index';
import TaskForm from '../TaskForm/index';
import TaskSearch from '../TaskSearch/index';
import TasksList from '../TasksList/index';
const ToDoList:React.FC = () => {
    return (
        <div className="App">
            <TaskForm  />
            <TaskSearch  />
            <TasksList  />
            <Footer  /> 
        </div>
    );
}
export default ToDoList;