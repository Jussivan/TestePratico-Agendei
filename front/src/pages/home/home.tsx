import TaskCard from '../../components/taskCard/taskCard';
import TaskRoutes from '../../routes/taskRoutes/taskRoutes';
import { useEffect, useState } from 'react';

// Definição da interface para representar uma tarefa
interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
}

// Componente Home que recebe um parâmetro opcional de resultados da busca
function Home({ searchResults }: { searchResults?: Task[] | null }) {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState<Task[]>([]);
  // Estado para controlar o carregamento das tarefas
  const [isLoading, setIsLoading] = useState(true);

  // Função assíncrona para buscar todas as tarefas da API
  const fetchAllTasks = async () => {
    try {
      setIsLoading(true); // Define que está carregando
      const tasksData = await TaskRoutes.getTasks(); // Chama a API para buscar as tarefas
      setTasks(tasksData); // Atualiza o estado com as tarefas recebidas
    } catch (err) {
      console.error("Erro ao buscar tarefas:", err);
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  // useEffect para carregar as tarefas assim que o componente for montado
  useEffect(() => {
    fetchAllTasks();
  }, []);

  // Define quais tarefas serão exibidas
  // Se `searchResults` for null ou undefined, usa todas as tarefas (`tasks`)
  // Se `searchResults` estiver vazio, exibe uma mensagem informando que nada foi encontrado
  const tasksToRender = searchResults === null || searchResults === undefined 
    ? tasks 
    : (searchResults.length > 0 
      ? searchResults 
      : []);

  return (
    <div className='min-h-screen bg-neutral-100 pt-25 py-10 px-50'>
      {/* Exibe a mensagem de carregamento enquanto as tarefas estão sendo buscadas */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Carregando tarefas...</p>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-10'>
          {/* Verifica se há tarefas para exibir */}
          {tasksToRender.length > 0 ? (
            // Mapeia e renderiza os cards de tarefas
            tasksToRender.map(task => (
              <TaskCard
                key={task.id}
                id={task.id}
                name={task.name}
                description={task.description}
                deadline={task.deadline}
                refreshTasks={fetchAllTasks} // Passa a função para atualizar as tarefas após ações no card
              />
            ))
          ) : (
            // Exibe mensagem caso não haja tarefas disponíveis
            <div className="col-span-2 text-center py-10">
              <p className="text-lg text-gray-500">
                {searchResults !== null && searchResults !== undefined && searchResults.length === 0
                  ? "Nenhuma tarefa encontrada com esse critério."
                  : "Nenhuma tarefa cadastrada ainda."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
