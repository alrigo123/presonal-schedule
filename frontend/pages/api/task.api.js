// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export const allTasks = async () => await axios.get("http://localhost:3456/tasks")

export const singleTask = async (id) => await axios.get(`http://localhost:3456/tasks/${id}`)

export const addTask = async (task) => await axios.post("http://localhost:3456/tasks", task)

export const removeTask = async (id) => await axios.delete(`http://localhost:3456/tasks/${id}`)

export const updateTask = async (id, task) => await axios.put(`http://localhost:3456/tasks/${id}`, task)

export const toggleStatus = async (id, status) => await axios.put(`http://localhost:3456/tasks/${id}`, {status})