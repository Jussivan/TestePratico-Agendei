import TaskRoutes from "../../../routes/taskRoutes/taskRoutes";

interface DeleteTaskProps {
  isOpen: boolean; // Define se o modal está aberto
  onClose: () => void; // Função para fechar o modal
  id: Number; // ID da tarefa a ser deletada (use `number` em vez de `Number`)
  name: string; // Nome da tarefa a ser deletada
  refreshTasks: () => void; // Função para atualizar a lista de tarefas
}

function DeleteTask({ isOpen, onClose, id, name, refreshTasks }: DeleteTaskProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      await TaskRoutes.deleteTask(id); // Chama a função para deletar a tarefa
      refreshTasks(); // Atualiza a lista de tarefas
      onClose(); // Fecha o modal após deletar a tarefa
    } catch (err) {
      console.error("Erro ao deletar tarefa:", err);
    }
  };

  // Se o modal não estiver aberto, retorna null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <form
        className="grid bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-left gap-5"
        onSubmit={handleSubmit}
      >
        <label className="block text-sm font-medium text-gray-800 text-center">
          Deseja realmente deletar essa tarefa?
        </label>
        <label className="block text-sm font-medium text-red-800 text-center">
          {name}
        </label>
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
            <span className="text-white font-semibold">Deletar</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteTask;