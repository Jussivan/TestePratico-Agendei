import { StrictMode } from 'react'; // Importa o modo estrito do React, que ajuda a identificar problemas no desenvolvimento
import { createRoot } from 'react-dom/client'; // Importa a função para criar a raiz do aplicativo React
import Home from './pages/home/home.tsx'; // Importa o componente Home
import Header from './components/header/header.tsx'; // Importa o componente Header
import { useState } from 'react'; // Importa o hook useState para gerenciar estados

// Define a interface Task que representa uma tarefa
interface Task {
  id: number; // Identificador único da tarefa
  name: string; // Nome da tarefa
  description: string; // Descrição da tarefa
  deadline: Date; // Data de vencimento da tarefa
}

// Componente principal do aplicativo
function App() {
  // Estado para armazenar os resultados da busca (pode ser um array de tarefas ou null)
  const [searchResults, setSearchResults] = useState<Task[] | null>(null);

  return (
    <StrictMode>
      {/* Renderiza o Header e passa a função de setSearchResults para manipular os resultados da busca */}
      <Header onSearchResults={setSearchResults} />
      {/* Renderiza o componente Home e passa os resultados da busca como props */}
      <Home searchResults={searchResults ?? undefined} />
    </StrictMode>
  );
}

// Cria a raiz do aplicativo React e renderiza o componente App no elemento com id 'root'
createRoot(document.getElementById('root')!).render(<App />);