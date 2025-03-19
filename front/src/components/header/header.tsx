import AddTask from "../addTask/addTask";
import Search from "../search/search";

function Header() {
  return (
    <div className="fixed w-full flex bg-green-600 justify-between items-center p-5 px-20">
      {/*Botão para Adicionar Tarefa*/}
      <div className="flex-1">
        <AddTask />
      </div>

      {/*Título do Site*/}
      <h1 className="text-white font-bold text-[20px] text-center flex-1">
        Agendei
      </h1>

      {/*Search para Buscar Tarefas*/}
      <div className="flex-1 flex justify-end">
        <Search />
      </div>
    </div>
  );
}

export default Header;