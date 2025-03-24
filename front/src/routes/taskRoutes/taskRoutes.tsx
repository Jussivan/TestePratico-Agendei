import api from "../../api/api"; // Importa a instância do Axios

const TaskRoutes = {
  // Função para criar uma tarefa
  createTask: async (taskData: { name: string; description: string, deadline:Date}) => {
    try {
      const response = await api.post("/tasks", taskData); // Faz a requisição POST
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      throw error; // Lança o erro para ser tratado no componente ou serviço que chamou a função
    }
  },

  // Função para buscar todas as tarefas
  getTasks: async () => {
    try {
      const response = await api.get("/tasks");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      throw error;
    }
  },

  // Função para atualizar uma tarefa
  updateTask: async (taskId: Number, updatedData: { name?: string; description?: string, deadline: Date }) => {
    try {
      const response = await api.put(`/tasks/${taskId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      throw error;
    }
  },

  // Função para deletar uma tarefa
  deleteTask: async (taskId: Number) => {
    try {
      const response = await api.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      throw error;
    }
  },
};

export default TaskRoutes;