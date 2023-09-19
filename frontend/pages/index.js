import React from "react"
import TasksChart from "../components/TasksChart"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">My App</h1>
      <TasksChart />
    </div>
  )
}
