import { getAllTasks, addTask, deleteTaskById, getTaskById, updateTaskById } from '../controllers/task.controller.js';
import { Router } from 'express'

const router = Router()

router.get('/tasks',getAllTasks)

router.get('/tasks/:id',getTaskById)

router.post('/tasks',addTask)

router.put('/tasks/:id',updateTaskById)

router.delete('/tasks/:id',deleteTaskById)


export default router;