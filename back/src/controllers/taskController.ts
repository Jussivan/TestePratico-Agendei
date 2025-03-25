// src/controllers/TaskController.ts
import { Request, Response } from 'express';
import TaskService from '../services/taskService';

class TaskController {
    // Cria uma nova tarefa
    async create(req: Request, res: Response) {
        const task = await TaskService.createTask(req.body);
        res.status(201).json(task);
    }

    // Busca todas as tarefas
    async getAll(req: Request, res: Response) {
        const tasks = await TaskService.getAllTasks();
        res.status(200).json(tasks);
    }

    // Busca uma tarefa pelo ID
    async getByName(req: Request, res: Response) {
        const task = await TaskService.getTaskByName(req.params.name);
        res.status(200).json(task);
    }

    // Atualiza uma tarefa
    async update(req: Request, res: Response) {
        const task = await TaskService.updateTask(parseInt(req.params.id), req.body);
        res.status(200).json(task);
    }

    // Exclui uma tarefa
    async delete(req: Request, res: Response) {
        await TaskService.deleteTask(parseInt(req.params.id));
        res.status(204).send();
    }
}

export default new TaskController();