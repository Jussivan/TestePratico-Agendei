import pool from '../config/db';
import { Task } from '../models/Task';

class TaskRepository {
    // Cria uma nova tarefa
    async create(task: Task) {
        const { name, description, deadline } = task;
        const result = await pool.query(
            'INSERT INTO Tasks (name, description, deadline) VALUES ($1, $2, $3) RETURNING *',
            [name, description, deadline]
        );
        return result.rows[0];
    }

    // Busca todas as tarefas
    async findAll() {
        const result = await pool.query('SELECT * FROM Tasks');
        return result.rows;
    }

    // Busca uma tarefa pelo ID
    async findById(id: number) {
        const result = await pool.query('SELECT * FROM Tasks WHERE id = $1', [id]);
        return result.rows[0];
    }

    // Atualiza uma tarefa existente
    async update(id: number, task: Task) {
        const { name, description, deadline } = task;
        const result = await pool.query(
            'UPDATE Tasks SET name = $1, description = $2, deadline = $3 WHERE id = $4 RETURNING *',
            [name, description, deadline, id]
        );
        return result.rows[0];
    }

    // Deleta uma tarefa pelo ID
    async delete(id: number) {
        await pool.query('DELETE FROM Tasks WHERE id = $1', [id]);
    }
}

export default new TaskRepository();