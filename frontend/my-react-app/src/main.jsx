import { StrictMode } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
  <Router>
    <LandingPage />
  </Router>
  </Provider>,
)
