import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {DataProvider} from "./Components/ContextProvider.jsx"

import App from './App.jsx'
import NavBar from './Components/NavBar.jsx'









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>

      <App />
    </DataProvider>
  </StrictMode>,
)
