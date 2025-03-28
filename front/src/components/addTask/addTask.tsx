import { IoIosAddCircle } from "react-icons/io"; // Importa o ícone de adição
import CreateTask from "../modals/createTask/createTask"; // Importa o modal para criar uma nova tarefa
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do modal

function AddTask() {
  // Estado para controlar a visibilidade do modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Botão para abrir o modal de criação de tarefa */}
      <button
        className="flex items-center text-green-600 bg-white px-4 py-2 rounded-full gap-1 cursor-pointer"
        onClick={() => setOpenModal(true)} // Ao clicar, define o estado como true para abrir o modal
      >
        <IoIosAddCircle size={20} /> {/* Ícone de adição */}
        <span className="font-semibold">Adicionar Tarefa</span> {/* Texto do botão */}
      </button>

      {/* Modal de criação de tarefa */}
      <CreateTask
        isOpen={openModal} // Passa o estado para controlar se o modal está aberto
        onClose={() => setOpenModal(false)} // Fecha o modal ao chamar a função de fechar
      />
    </>
  );
}

export default AddTask;