import TaskCard from '../../components/taskCard/taskCard';
import TaskRoutes from '../../routes/taskRoutes/taskRoutes';
import { useEffect, useState } from 'react';

// Defina a interface para a tarefa
interface Task {
  id?: string; // Opcional, dependendo da sua API
  name: string;
  description: string;
  deadline: Date; // Ou Date, dependendo da sua API
}

function Home() {
  // Defina o tipo do estado tasks como Task[]
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await TaskRoutes.getTasks();
        console.log(tasksData);
        setTasks(tasksData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className='min-h-screen bg-neutral-100 pt-25 py-10 px-50'>
      <div className='grid grid-cols-2 gap-10'>
        {tasks.map((task, index) => (
          <TaskCard
            key={index} // Use o índice como key (não ideal)
            name={task.name}
            description={task.description}
            deadline={task.deadline}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;