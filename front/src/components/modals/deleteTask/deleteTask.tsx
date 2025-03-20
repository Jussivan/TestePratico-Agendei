interface DeleteTaskProps {
    isOpen: boolean; // Define o tipo da prop isOpen como boolean
}

function DeleteTask({isOpen}: DeleteTaskProps){
    return(
        <>{isOpen ?
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                <form className="grid bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-left gap-5">
                    <label className="block text-sm font-medium text-gray-800 text-center">Deseja realmente Deletar essa Tarefa ?</label>
                    <label className="block text-sm font-medium text-red-800">Titulo Tarefa</label>
                    <div className="grid grid-cols-2 gap-5 pt-2">
                        <button className="bg-red-600 py-2 px-4 rounded-lg cursor-pointer" onClick={() => {isOpen=false}}>
                            <span className="text-white font-semibold">Cancelar</span>
                        </button>
                        <button className="bg-green-600 py-2 px-4 rounded-lg cursor-pointer"
                            type="submit"
                        >
                            <span className="text-white font-semibold">Salvar</span>
                        </button>
                    </div>
                </form>
            </div>
        : null}</>
    );
}

export default DeleteTask;