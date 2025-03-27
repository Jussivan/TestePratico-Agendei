import { IoIosAddCircle } from "react-icons/io";
import CreateTask from "../modals/createTask/createTask";
import { useState } from "react";

function AddTask() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
        className="flex items-center text-green-600 bg-white px-4 py-2 rounded-full gap-1 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <IoIosAddCircle size={20} />
        <span className="font-semibold">Adicionar Tarefa</span>
      </button>

      {/* Modal CreateTask */}
      <CreateTask
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default AddTask;