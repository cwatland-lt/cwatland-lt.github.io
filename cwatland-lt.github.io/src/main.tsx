import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from '@/components/ui/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </StrictMode>,
)
