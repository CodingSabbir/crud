import React from 'react'

export default function AddTaskButtonSection() {
  return (
    <div className="items-start justify-between md:flex">
    <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Team members
        </h3>
        <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
    </div>
    <div className="mt-3 md:mt-0 flex gap-7">
        <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
        >
            Add member
        </a>
        <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-indigo-700 md:text-sm"
        >
           Delete All
        </a>
    </div>
</div>
  )
}
