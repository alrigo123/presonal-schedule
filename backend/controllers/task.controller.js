// Task.controller.js

import pool from "../db_connection.js";

export const getAllTasks = async (req, res, next) => {
    try {
        const [tasks] = await pool.query('SELECT * FROM Task');
        res.json(tasks);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const [single_task] = await pool.query('SELECT * FROM Task where Id_task = ' + [id]);
        res.json(single_task);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const single_task = await pool.query('UPDATE Task SET description = ?, start = ?, end = ?, status = ? WHERE Id_task = ?', [
            single_task.description,
            single_task.start,
            single_task.end,
            single_task.status,
            id,
        ]);
        res.json(single_task);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const [task_deleted] = await pool.query('DELETE FROM Task WHERE Id_task = ?', [id]);
        res.json(task_deleted);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const addTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task_added = await pool.query('INSERT INTO Task (description, start, end, status) VALUES (?, ?, ?, ?)', [
            task_added.description,
            task_added.start,
            task_added.end,
            task_added.status,
        ]);
        res.json(task_added);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
