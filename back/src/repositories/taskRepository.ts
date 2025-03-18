import pool from '../config/db';
import { Task } from '../models/Task';

class TaskRepository {
    async create(task: Task) {
        const { name, description } = task;
        const result = await pool.query(
            'INSERT INTO Tasks (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        return result.rows[0];
    }

    async findAll() {
        const result = await pool.query('SELECT * FROM Tasks');
        return result.rows;
    }

    async findById(id: number) {
        const result = await pool.query('SELECT * FROM Tasks WHERE id = $1', [id]);
        return result.rows[0];
    }

    async update(id: number, task: Task) {
        const { name, description } = task;
        const result = await pool.query(
            'UPDATE Tasks SET name = $1, description = $2 WHERE id = $3 RETURNING *',
            [name, description, id]
        );
        return result.rows[0];
    }

    async delete(id: number) {
        await pool.query('DELETE FROM Tasks WHERE id = $1', [id]);
    }
}

export default new TaskRepository();