// Task.controller.js

import pool from "../db_connection.js";

export const getAllTasks = async (req, res, next) => {
    try {
        const results = await pool.query('SELECT * FROM Task');
        return results;
    }
    catch (error) {
    }
}

export const getTaskById = async (req, res, next) => {
    const results = await pool.query('SELECT * FROM Task WHERE Id_task = ?', [id]);
    return results[0];
}

export const updateTaskById = async (req, res, next) => {
    const results = await pool.query('UPDATE Task SET description = ?, start = ?, end = ?, status = ? WHERE Id_task = ?', [
        task.description,
        task.start,
        task.end,
        task.status,
        id,
    ]);
    return results;
}

export const deleteTaskById = async (req, res, next) => {
    const results = await pool.query('DELETE FROM Task WHERE Id_task = ?', [id]);
    return results;
}

export const addTask = async (req, res, next) => {
    const results = await pool.query('INSERT INTO Task (description, start, end, status) VALUES (?, ?, ?, ?)', [
        task.description,
        task.start,
        task.end,
        task.status,
    ]);
    return task;
}
