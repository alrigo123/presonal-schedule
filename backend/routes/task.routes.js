import { getAllTasks, addTask, deleteTaskById, getTaskById, updateTaskById } from '../controllers/task.controller.js';
import { Router } from 'express'

const router = Router()

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = await getTaskById(id);
    res.send(task);
});

router.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = req.body;
    await updateTaskById(id, task);
    res.send();
});

router.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    await deleteTaskById(id);
    res.send();
});

router.post('/tasks', async (req, res) => {
    const task = req.body;
    const newTask = await addTask(task);
    res.send(newTask);
});

export default router;