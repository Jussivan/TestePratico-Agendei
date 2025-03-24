import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import DeleteTask from "../modals/deleteTask/deleteTask";
import EditTask from "../modals/editTask/editTask";
import { useState } from "react";

interface TaskCardProps {
  id: Number;
  name: string;
  description: string;
  deadline: Date;
  refreshTasks: () => void;
}

function TaskCard({ id, name, description, deadline, refreshTasks }: TaskCardProps) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  function formatarData(dataISO: Date) {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div className="grid grid-rows-7 bg-white border border-gray-200 rounded-lg gap-1 shadow-md pb-3 flex flex-col h-[280px]">
      {/* Título e Data */}
      <div className="row-start-1 row-end-3 flex justify-between items-center bg-green-600 px-6 py-2 rounded-t-lg">
        <p className="text-2xl font-bold tracking-normal text-white">{name}</p>
        <div className="bg-green-500 p-1 px-2 rounded-full">
          <p className="text-lg font-semibold text-green-100 tracking-wide">
            {formatarData(deadline)}
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div className="row-start-3 row-end-7 px-6 py-1 flex-grow overflow-hidden">
        <p className="font-normal text-gray-800 hyphens-auto break-words text-ellipsis">
          {description}
        </p>
      </div>

      {/* Botões */}
      <div className="row-start-7 row-end-8 flex justify-end px-6 gap-5">
        <button
          className="flex bg-green-600 px-4 rounded-lg items-center gap-1 text-white cursor-pointer"
          onClick={() => setEditModal(true)}
        >
          <RiPencilFill size={20} />
          <span className="font-semibold">Editar</span>
        </button>
        <button
          className="flex bg-red-600 px-4 rounded-lg items-center gap-1 text-white cursor-pointer"
          onClick={() => setDeleteModal(true)}
        >
          <FaTrashAlt />
          <span className="font-semibold">Deletar</span>
        </button>
      </div>

      {/* Modais */}
      <EditTask
        id={id}
        name={name}
        description={description}
        deadline={deadline}
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        refreshTasks={refreshTasks}
      />
      <DeleteTask
        id={id}
        name={name}
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        refreshTasks={refreshTasks}
      />
    </div>
  );
}

export default TaskCard;