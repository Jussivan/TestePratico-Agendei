import { RiPencilFill } from "react-icons/ri"; // Importa o ícone de lápis para edição
import { FaTrashAlt } from "react-icons/fa"; // Importa o ícone de lixeira para exclusão
import DeleteTask from "../modals/deleteTask/deleteTask"; // Importa o modal de exclusão de tarefa
import EditTask from "../modals/editTask/editTask"; // Importa o modal de edição de tarefa
import { useState } from "react"; // Importa o hook useState para gerenciar estados

// Define a interface para as propriedades do componente TaskCard
interface TaskCardProps {
  id: number; // ID da tarefa
  name: string; // Nome da tarefa
  description: string; // Descrição da tarefa
  deadline: Date; // Data de vencimento da tarefa
  refreshTasks: () => void; // Função para atualizar a lista de tarefas
}

// Componente TaskCard que representa uma tarefa
function TaskCard({ id, name, description, deadline, refreshTasks }: TaskCardProps) {
  // Estados para controlar a visibilidade dos modais
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  // Função para formatar a data no formato DD/MM/AAAA
  function formatarData(dataISO: Date) {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0"); // Formata o dia
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Formata o mês
    const ano = data.getFullYear(); // Obtém o ano
    return `${dia}/${mes}/${ano}`; // Retorna a data formatada
  }

  return (
    <div className="grid grid-rows-7 bg-white border border-gray-200 rounded-lg gap-1 shadow-md pb-3 flex flex-col h-[280px]">
      {/* Título e Data */}
      <div className="row-start-1 row-end-3 flex justify-between items-center bg-green-600 px-6 py-2 rounded-t-lg">
        <p className="text-2xl font-bold tracking-normal text-white pr-1">{name}</p> {/* Nome da tarefa */}
        <div className="bg-green-500 p-1 px-2 rounded-full">
          <p className="text-lg font-semibold text-green-100 tracking-wide">
            {formatarData(deadline)} {/* Data formatada da tarefa */}
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div className="row-start-3 row-end-7 px-6 py-1 flex-grow overflow-hidden">
        <p className="font-normal text-gray-800 hyphens-auto break-words text-ellipsis">
          {description} {/* Descrição da tarefa */}
        </p>
      </div>

      {/* Botões para editar e deletar */}
      <div className="row-start-7 row-end-8 flex justify-end px-6 gap-5">
        <button
          className="flex bg-green-600 px-4 rounded-lg items-center gap-1 text-white cursor-pointer"
          onClick={() => setEditModal(true)} // Abre o modal de edição ao clicar
        >
          <RiPencilFill size={20} /> {/* Ícone de edição */}
          <span className="font-semibold">Editar</span> {/* Texto do botão */}
        </button>
        <button
          className="flex bg-red-600 px-4 rounded-lg items-center gap-1 text-white cursor-pointer"
          onClick={() => setDeleteModal(true)} // Abre o modal de exclusão ao clicar
        >
          <FaTrashAlt /> {/* Ícone de exclusão */}
          <span className="font-semibold">Deletar</span> {/* Texto do botão */}
        </button>
      </div>

      {/* Modais para editar e deletar a tarefa */}
      <EditTask
        id={id}
        name={name}
        description={description}
        deadline={deadline}
        isOpen={editModal} // Estado que controla se o modal está aberto
        onClose={() => setEditModal(false)} // Fecha o modal ao chamar a função
        refreshTasks={refreshTasks} // Passa a função para atualizar as tarefas
      />
      <DeleteTask
        id={id}
        name={name}
        isOpen={deleteModal} // Estado que controla se o modal está aberto
        onClose={() => setDeleteModal(false)} // Fecha o modal ao chamar a função
        refreshTasks={refreshTasks} // Passa a função para atualizar as tarefas
      />
    </div>
  );
}

export default TaskCard; // Exporta o componente TaskCard