import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home/home.tsx';
import Header from './components/header/header.tsx';
import { useState } from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
}

function App() {
  const [searchResults, setSearchResults] = useState<Task[] | null>(null);

  return (
    <StrictMode>
      <Header onSearchResults={setSearchResults} />
      <Home searchResults={searchResults ?? undefined} />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<App />);