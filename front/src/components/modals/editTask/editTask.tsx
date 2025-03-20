interface EditTaskProps {
    isOpen: boolean;
}

function EditTask({isOpen}: EditTaskProps) {
    return(
        <>{isOpen ?
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                <form className="grid bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-left gap-2">
                    <div className="flex justify-center text-green-600">
                        <label className="text-xl font-bold">Editar Tarefa</label>
                    </div>
                    <label className="block text-sm font-medium text-gray-800">Título</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-800"
                        placeholder="Digite o Titulo da Tarefa"
                    />
                    <label className="block text-sm font-medium text-gray-800">Descrição</label>
                    <textarea
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 outline-none"
                        placeholder="Digite o Descrição da Tarefa"
                    />
                    <label className="block text-sm font-medium text-gray-800">Prazo</label>
                    <input
                        type="date"
                        className="block w-full px-3 py-2 rounded-md border border-gray-300 text-gray-800 outline-none"
                    />
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
    )
}

export default EditTask;