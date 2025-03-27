import { useState } from "react";
import TaskRoutes from "../../../routes/taskRoutes/taskRoutes";

interface EditTaskProps {
    isOpen: boolean;
    id: Number; // Use `number` em vez de `Number`
    name: string;
    description: string;
    deadline: Date;
    onClose: () => void; // Função para fechar o modal
    refreshTasks: () => void; // Função para atualizar a lista de tarefas
}
  
function EditTask({ isOpen, id, name, description, deadline, onClose, refreshTasks }: EditTaskProps) {
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskDeadline, setTaskDeadline] = useState(deadline);
  
    // Função para formatar a data no formato YYYY-MM-DD
    const formatarDataParaInput = (data: Date) => {
        let Data = data.toString();
        return Data.slice(0, 10);
    };
  
    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
  
        try {
            const updatedTask = {
            id,
            name: taskName,
            description: taskDescription,
            deadline: new Date(taskDeadline), // Converte a string de volta para Date
            };
    
            await TaskRoutes.updateTask(id, updatedTask); // Atualiza a tarefa na API
            refreshTasks(); // Atualiza a lista de tarefas
            onClose(); // Fecha o modal
        } catch (err) {
            console.error("Erro ao atualizar tarefa:", err);
        }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
        <form
          className="grid bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-left gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center text-green-600">
            <label className="text-xl font-bold">Editar Tarefa</label>
          </div>
  
          {/* Campo Título */}
          <label className="block text-sm font-medium text-gray-800">Título</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-800"
            placeholder="Digite o Título da Tarefa"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
  
          {/* Campo Descrição */}
          <label className="block text-sm font-medium text-gray-800">Descrição</label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 outline-none"
            placeholder="Digite a Descrição da Tarefa"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
  
          {/* Campo Prazo */}
          <label className="block text-sm font-medium text-gray-800">Prazo</label>
          <input
            type="date"
            className="block w-full px-3 py-2 rounded-md border border-gray-300 text-gray-800 outline-none"
            value={formatarDataParaInput(taskDeadline)}
            onChange={(e) => setTaskDeadline(new Date(e.target.value))}
            required
          />
  
          {/* Botões */}
          <div className="grid grid-cols-2 gap-5 pt-2">
            <button
              type="button"
              className="bg-red-600 py-2 px-4 rounded-lg cursor-pointer"
              onClick={onClose}
            >
              <span className="text-white font-semibold">Cancelar</span>
            </button>
            <button
              type="submit"
              className="bg-green-600 py-2 px-4 rounded-lg cursor-pointer"
            >
              <span className="text-white font-semibold">Salvar</span>
            </button>
          </div>
        </form>
      </div>
    );
}
  
export default EditTask;