import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home.tsx'
import Header from './components/header/header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header/>
      <Home />
  </StrictMode>
)