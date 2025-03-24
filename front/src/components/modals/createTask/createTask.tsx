import { useState } from 'react';
import TaskRoutes from '../../../routes/taskRoutes/taskRoutes';

interface CreateTaskProps {
  isOpen: boolean; // Define se o modal está aberto
  onClose: () => void; // Função para fechar o modal
}

interface Task {
  id?: string; // Opcional, dependendo da sua API
  name: string;
  description: string;
  deadline: Date; // Ou Date, dependendo da sua API
}

function CreateTask({ isOpen, onClose}: CreateTaskProps) {
  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Cria o objeto taskData
    const taskData: Task = {
      name,
      description,
      deadline: new Date(deadline), // Converte a string para Date
    };

    // Chama a função para criar a tarefa
    TaskRoutes.createTask(taskData)
      .then(() => {
        onClose(); // Fecha o modal após criar a tarefa
        location.reload();
      })
      .catch((error) => {
        console.error('Erro ao criar tarefa:', error);
      });
  };

  // Se o modal não estiver aberto, retorna null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <form
        className="grid bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-left gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <label className="text-xl font-bold text-green-600">Criar Nova Tarefa</label>
        </div>

        {/* Campo Título */}
        <label className="block text-sm font-medium text-gray-800">Título</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-800"
          placeholder="Digite o Título da Tarefa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Campo Descrição */}
        <label className="block text-sm font-medium text-gray-800">Descrição</label>
        <textarea
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 outline-none"
          placeholder="Digite a Descrição da Tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Campo Prazo */}
        <label className="block text-sm font-medium text-gray-800">Prazo</label>
        <input
          type="date"
          className="block w-full px-3 py-2 rounded-md border border-gray-300 text-gray-800 outline-none"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
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

export default CreateTask;