import Link from 'next/link'
import React from 'react'

const TasksForm = () => {

    return (
        <div>
            <form className="flex flex-col w-full max-w-md px-4 py-8">
                <label for="description" className="mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                <textarea id="description" name="description" className="w-1/2 p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <label for="start_time" className="mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-black">Start time</label>
                <input type="time" id="start_time" name="start_time" className="w-1/2 p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <label for="end_time" className="mb-2 mt-4 text-sm font-medium text-gray-900 dark:texblack">End time</label>
                <input type="time" id="end_time" name="end_time" className="w-1/2 p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <Link href="/">
                    <button type="submit" className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </Link>
            </form>
        </div>
    )
}

export default TasksForm
