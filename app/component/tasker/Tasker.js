


'use client';
import { useState } from "react";
import AddTaskButtonSection from "../AddTaskButtonSection";
import { FiHeart } from 'react-icons/fi';
import AddTaskModal from "../AddTaskModal";
import Search from "../Search";

export default function Tasker() {
    // Default task data
    const defaultTasks = {
        id: crypto.randomUUID(),
        name: "Sabbir Rahman",
        position: "Frontend Developer",
        salary: [40, 70, 100],
        email: "sabbir.rahman@example.com",
        isFavorite: true,
        
    };

    
    // State to hold tasks
    const [tasks, setTasks] = useState([defaultTasks]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);


    const handleAddUser = (user,isAdd) => {
        if(isAdd){
            setTasks([...tasks, user])
        }else{
            setTasks(
                tasks.map((task)=>{
                    if(task.id === user.id){
                        return user
                    }
                    return task
                })
            )
        }
        
        setShowAddModal(false)
    };

    const handleEditTask = (user) => {
        setTaskToUpdate(user); // Set the task to be updated
        setShowAddModal(true); // Open modal
    };
    
    const handleDeleteTask = (userId) => {
        setTasks(tasks.filter((task) => task.id!== userId));
     
    };

    function handleCloseClick (){
        setShowAddModal(false);
        setTaskToUpdate(null);
    }
    function handleDeleteAllMember(){
        tasks.length= 0;
        setTasks([...tasks]);
    }

    function handleOnFav(id){
        setTasks(tasks.map((task)=>{
            if(task.id === id){
                task.isFavorite =!task.isFavorite;
            }
            return task
        }))
    }
 
    function handleClickSearch(searchText){
        setTasks(tasks.filter((task) => task.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
            {showAddModal && <AddTaskModal onSave={handleAddUser} taskToUpdate={taskToUpdate} onCloseClick={handleCloseClick}/>}
            <AddTaskButtonSection tasks={tasks} onAddClick={() => setShowAddModal(true)}  deleteAllMemberClick={handleDeleteAllMember}/>
                <Search onSearch={handleClickSearch}/>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th>
                            <th className="py-3 px-6 text-center">Options</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {tasks.map((item, id) => (
                            <tr key={id}>
                                <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                                    <button className="flex items-center gap-3" onClick={()=>handleOnFav(item.id)}>
                                    {item.isFavorite ? <FiHeart className="text-red-500 cursor-pointer" /> : <FiHeart className="text-gray-400 cursor-pointer" />} {item.name}
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.salary.join(',')}
                                </td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <a 
                                    onClick={() => handleEditTask(item)}
                                     href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Edit
                                    </a>
                                    <button 
                                     onClick={() => handleDeleteTask(item.id)}
                                     className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



