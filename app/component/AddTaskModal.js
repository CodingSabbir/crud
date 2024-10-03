import React, { useState } from 'react';

const AddTaskModal = ({onSave,taskToUpdate,onCloseClick}) => {
  const [user,setUser]=useState(taskToUpdate || {
    id: crypto.randomUUID(),
    name: "",
    position: "",
    salary: [],
    email: "",
    isFavorite: false,
  });

  const [isAdd, setIsAdd]=useState(Object.is(taskToUpdate,null))

const handleChange = (e) => {
    const name= e.target.name
    let value= e.target.value
    if(name === "salary"){
      value= value.split(",")
    }
    setUser(
     {
       ...user,
        [name]: value
     }
    )
};

    return (
     <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
    <div className="flex items-center">
      <h3 className="text-indigo-600 text-xl font-bold flex-1">{isAdd ? "Add New Member" : "Edit Member"}</h3>
      <svg onClick={onCloseClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hover:text-red-600 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    </div>
    <form className="space-y-4 mt-8">
      <div>
        <label className="text-gray-800 text-sm mb-2 block">User Name </label>
        <input value={user.name} onChange={handleChange} name='name' type="text" placeholder="Enter your name" className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-indigo-600 focus:bg-transparent rounded-lg" />
      </div>
      <div>
        <label className="text-gray-800 text-sm mb-2 block">Email</label>
        <input value={user.email} onChange={handleChange} name='email' type="email" placeholder="Enter your email" className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-indigo-600 focus:bg-transparent rounded-lg" />
      </div>
    
     
      <div>
        <label className="text-gray-800 text-sm mb-2 block">Position</label>
        <input value={user.position} onChange={handleChange} name='position' type="text" placeholder="Enter price" className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-indigo-600 focus:bg-transparent rounded-lg" />
      </div>
      <div>
        <label className="text-gray-800 text-sm mb-2 block">Salary</label>
        <input value={user.salary} onChange={handleChange} name='salary' type="text" placeholder="Enter your salary" className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-indigo-600 focus:bg-transparent rounded-lg" />
      </div>
      <div className="flex justify-end gap-4 !mt-8">
      {/* <button 
       
         type="submit" className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-red-600 hover:bg-red-700">Close</button> */}
        <button 
        onClick={(e) => {
          e.preventDefault();
          onSave(user,isAdd); 
        }}
         type="submit" className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-indigo-600 hover:bg-indigo-700">Submit</button>
      </div>
    </form>
  </div>
</div>


    );
};

export default AddTaskModal;