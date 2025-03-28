import AddTask from "../addTask/addTask"; // Importa o componente para adicionar uma nova tarefa
import Search from "../search/search"; // Importa o componente de busca
import { ReactElement } from "react"; // Importa o tipo ReactElement para a tipagem do componente

// Define a interface Task que representa uma tarefa
interface Task {
  id: number; // Identificador único da tarefa
  name: string; // Nome da tarefa
  description: string; // Descrição da tarefa
  deadline: Date; // Data de vencimento da tarefa
}

// Define a interface para as propriedades do componente Header
interface HeaderProps {
  onSearchResults: (tasks: Task[] | null) => void; // Função que recebe os resultados da busca
}

// Componente Header que recebe uma função para tratar os resultados da busca
function Header({ onSearchResults }: HeaderProps): ReactElement {
  // Função para limpar os resultados da busca
  const handleClearSearch = () => {
    onSearchResults(null); // Chama a função com null para limpar os resultados
  };

  return (
    <div className="fixed w-full flex bg-green-600 justify-between items-center p-5 px-20">
      {/* Botão para adicionar nova tarefa */}
      <div className="flex-1">
        <AddTask /> {/* Componente para adicionar tarefa */}
      </div>

      {/* Título do site - clicável para limpar a busca */}
      <h1 
        className="text-white font-bold text-[20px] text-center flex-1 cursor-pointer hover:text-green-200 transition-colors"
        onClick={handleClearSearch} // Chama a função para limpar a busca ao clicar
      >
        Agendei {/* Nome do site */}
      </h1>

      {/* Componente de busca para encontrar tarefas */}
      <div className="flex-1 flex justify-end">
        <Search onSearchResults={onSearchResults} /> {/* Passa a função de resultados da busca */}
      </div>
    </div>
  );
}

export default Header; // Exporta o componente Header