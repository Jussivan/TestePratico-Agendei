import TaskCard from '../../components/taskCard/taskCard';
import TaskRoutes from '../../routes/taskRoutes/taskRoutes';
import { useEffect, useState } from 'react';

// Defina a interface para a tarefa
interface Task {
  id: Number; // Opcional, dependendo da sua API
  name: string;
  description: string;
  deadline: Date; // Ou Date, dependendo da sua API
}

function Home() {
  // Defina o tipo do estado tasks como Task[]
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const tasksData = await TaskRoutes.getTasks();
      setTasks(tasksData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const refreshTasks = () => {
    fetchTasks(); // Rebusca as tarefas após uma operação
  };

  return (
    <div className='min-h-screen bg-neutral-100 pt-25 py-10 px-50'>
      <div className='grid grid-cols-2 gap-10'>
        {tasks.map((task, index) => (
          <TaskCard
            key={index} // Use o índice como key (não ideal)
            id={task.id}
            name={task.name}
            description={task.description}
            deadline={task.deadline}
            refreshTasks={refreshTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;