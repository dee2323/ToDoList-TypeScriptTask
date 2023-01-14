import React, { createContext, useState} from "react";
import { task } from "../types";
export const tasksContext = createContext<valueInterface |null>(null);

interface valueInterface{
    tasks:task[],
    handleAddingTask:(task:string)=>void,
    handleDeletingTask:(id:string)=>void,
    handleCompletion:(id:string)=>void,
    handleSearch:(searchKey:string)=>void,
    isSearching:boolean,
    setIsSearching:React.Dispatch<React.SetStateAction<boolean>>,

}
interface props{
    children?: React.ReactNode;
}

const TaskContextProvider:React.FC<props>= ({ children }:props) => {
    var [tasks, setTasks] = useState<Array<task>>([])
    const [searchList, setSearchList] = useState<Array<task>>([])
    const [isSearching, setIsSearching] = useState(false)
   
    const handleAddingTask = (task:string) => {
        setTasks([...tasks, { task, id: crypto.randomUUID(), isCompleted: false }])
    }
    const handleDeletingTask = (id:string) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        const newSearchTask = searchList.filter(task => task.id !== id)
        setTasks([...newTasks])
        setSearchList([...newSearchTask])
    }
    const handleCompletion = (id:string) => {

        const newTask = tasks.find(task => { if (task.id === id) task.isCompleted = !task.isCompleted });
        setTasks([...tasks])
    }
    const handleSearch = (searchKey:string) => {
        const newTask = tasks.filter(task => String(task.task).includes(searchKey))
        setSearchList([...newTask]);
    }
const sampleAppContext: valueInterface = {
    tasks: isSearching ? searchList : tasks,
  handleSearch,
  handleDeletingTask,
  handleCompletion,
  isSearching,
  setIsSearching,
  handleAddingTask
};
    return <tasksContext.Provider value={
        sampleAppContext
    }>{children}</tasksContext.Provider>
}
export default TaskContextProvider