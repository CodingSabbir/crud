


'use client';
import { useState } from "react";
import AddTaskButtonSection from "../AddTaskButtonSection";
import { FiHeart } from 'react-icons/fi';
import AddTaskModal from "../AddTaskModal";

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

    const handleAddUser = (user) => {
        console.log(user);
    };
    // State to hold tasks
    const [tasks, setTasks] = useState([defaultTasks]);
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
            {showAddModal && <AddTaskModal onSave={handleAddUser}/>}
            <AddTaskButtonSection onAddClick={() => setShowAddModal(true)} />
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
                                    {item.isFavorite ? <FiHeart className="text-red-500 cursor-pointer" /> : <FiHeart className="text-gray-400 cursor-pointer" />} {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.salary.join(',')}
                                </td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <a href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Edit
                                    </a>
                                    <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
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



