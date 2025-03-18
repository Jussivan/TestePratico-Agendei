// src/services/TaskService.ts
import { Task } from '../models/Task';
import TaskRepository from '../repositories/taskRepository';

class TaskService {
    // Cria uma nova tarefa
    async createTask(task: Task) {
        return await TaskRepository.create(task);
    }

    // Busca todas as tarefas
    async getAllTasks() {
        return await TaskRepository.findAll();
    }

    // Busca uma tarefa pelo ID
    async getTaskById(id: number) {
        return await TaskRepository.findById(id);
    }

    // Atualiza uma tarefa
    async updateTask(id: number, task: Task) {
        return await TaskRepository.update(id, task);
    }

    // Exclui uma tarefa
    async deleteTask(id: number) {
        return await TaskRepository.delete(id);
    }
}

export default new TaskService();