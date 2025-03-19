import { IoIosAddCircle } from "react-icons/io";


function AddTask() {
    return(
        <button className="flex items-center text-green-600 bg-white px-4 py-2 rounded-full gap-1 cursor-pointer">
            <IoIosAddCircle size={20}/>
            <span className="font-semibold">Adicionar Tarefa</span>
        </button>
    )
}

export default AddTask;