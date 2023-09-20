import React from 'react'
import Link from 'next/link';

const TasksChart = () => {
    return (

        <div className="flex flex-col overflow-x-scroll">
            <Link href="/TasksForm">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ADD TASK</button>
            </Link>
            <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider">at - to</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">Tarea de topicos  hacer el mapa o lo del colab</td>
                        <td className="px-6 py-4 whitespace-nowrap">10:23 - 11:45</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button type="button" className="bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">DONE</button>
                            <button type="button" className="bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Red</button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <a href="#" className="text-red-800 hover:underline">Delete</a>
                            <a href="#" className="text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TasksChart
