import AddTask from "../addTask/addTask";
import Search from "../search/search";
import { ReactElement } from "react";

// Definindo a interface Task diretamente no arquivo
interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
}

interface HeaderProps {
  onSearchResults: (tasks: Task[] | null) => void;
}

function Header({ onSearchResults }: HeaderProps): ReactElement {
  const handleClearSearch = () => {
    onSearchResults(null);
  };

  return (
    <div className="fixed w-full flex bg-green-600 justify-between items-center p-5 px-20">
      {/* Botão para Adicionar Tarefa */}
      <div className="flex-1">
        <AddTask />
      </div>

      {/* Título do Site - agora clicável para limpar busca */}
      <h1 
        className="text-white font-bold text-[20px] text-center flex-1 cursor-pointer hover:text-green-200 transition-colors"
        onClick={handleClearSearch}
      >
        Agendei
      </h1>

      {/* Search para Buscar Tarefas */}
      <div className="flex-1 flex justify-end">
        <Search onSearchResults={onSearchResults} />
      </div>
    </div>
  );
}

export default Header;