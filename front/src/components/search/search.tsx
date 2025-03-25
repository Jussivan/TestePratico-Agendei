import { useState, useEffect } from 'react'; 
import TaskRoutes from '../../routes/taskRoutes/taskRoutes'; 

interface Task { 
  id: number; 
  name: string; 
  description: string; 
  deadline: Date; 
} 

function Search({ onSearchResults }: { onSearchResults: (tasks: Task[] | null) => void }) { 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [debouncedTerm, setDebouncedTerm] = useState(''); 

  // Debounce para evitar muitas requisições
  useEffect(() => { 
    const timerId = setTimeout(() => { 
      setDebouncedTerm(searchTerm); 
    }, 300); // Ajuste o tempo conforme necessário 
    return () => { 
      clearTimeout(timerId); 
    }; 
  }, [searchTerm]); 

  // Efeito para fazer a busca quando o termo debounced muda
  useEffect(() => { 
    const searchTasks = async () => { 
      // Se o input estiver vazio, passa null para renderizar todas as tasks
      if (!debouncedTerm.trim()) { 
        onSearchResults(null); 
        return; 
      } 

      try { 
        const results = await TaskRoutes.getTaskByName(debouncedTerm); 
        
        // Se encontrar resultados, passa os resultados
        // Se não encontrar resultados, passa um array vazio
        onSearchResults(results); 
      } catch (error) { 
        console.error("Erro ao buscar tarefas:", error); 
        onSearchResults([]); 
      } 
    }; 
    searchTasks(); 
  }, [debouncedTerm, onSearchResults]); 

  return ( 
    <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-full justify-center items-center"> 
      <div className="relative"> 
        <input 
          type="search" 
          placeholder="Pesquisar Tarefa" 
          className="w-full py-2 px-4 rounded-full border-none outline-none focus:ring-0 bg-transparent" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          autoComplete="off" 
        /> 
      </div> 
    </form> 
  ); 
} 

export default Search;