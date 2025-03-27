import TaskCard from '../../components/taskCard/taskCard';
import TaskRoutes from '../../routes/taskRoutes/taskRoutes';
import { useEffect, useState } from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
}

function Home({ searchResults }: { searchResults?: Task[] | null }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Busca TODAS as tasks da API
  const fetchAllTasks = async () => {
    try {
      setIsLoading(true);
      const tasksData = await TaskRoutes.getTasks();
      setTasks(tasksData);
    } catch (err) {
      console.error("Erro ao buscar tarefas:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Carrega as tasks ao iniciar
  useEffect(() => {
    fetchAllTasks();
  }, []);

  // Define quais tasks mostrar
  const tasksToRender = searchResults === null || searchResults === undefined 
    ? tasks 
    : (searchResults.length > 0 
      ? searchResults 
      : []);

  return (
    <div className='min-h-screen bg-neutral-100 pt-25 py-10 px-50'>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Carregando tarefas...</p>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-10'>
          {tasksToRender.length > 0 ? (
            tasksToRender.map(task => (
              <TaskCard
                key={task.id}
                id={task.id}
                name={task.name}
                description={task.description}
                deadline={task.deadline}
                refreshTasks={fetchAllTasks}
              />
            ))
          ) : (
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