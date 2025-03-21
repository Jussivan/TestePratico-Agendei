import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import DeleteTask from "../modals/deleteTask/deleteTask";
import EditTask from "../modals/editTask/editTask";
import { useState } from "react";


function TaskCard() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        {/*Título da Tarefa*/}
        <h5 className="text-2xl font-bold tracking-tight text-white bg-green-600 px-6 py-2 rounded-t-lg">
          Titulo
        </h5>
        {/*Descrição da Tarefa*/}
        <div className="px-6 py-3">
          <p className="font-normal text-gray-800">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>

        <div className="flex justify-end px-6 pb-4 gap-5">
            <button className="flex bg-green-600 py-2 px-4 rounded-lg items-center gap-1 text-white cursor-pointer" onClick={() => {setEditModal(true)}}>
                <RiPencilFill size={20}/>
                <span className="font-semibold">Editar</span>
                <EditTask isOpen={editModal}/>
            </button>
            <button className="flex bg-red-600 py-2 px-4 rounded-lg items-center gap-1 text-white cursor-pointer" onClick={() => {setDeleteModal(true)}}>
                <FaTrashAlt/>
                <span className="font-semibold">Deletar</span>
                <DeleteTask isOpen={deleteModal}/>
            </button>
        </div>
      </div>
    );
  }
  
  export default TaskCard;