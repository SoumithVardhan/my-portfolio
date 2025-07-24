import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import forceBlueTheme from './utils/forceBlueTheme.js'

// Apply blue theme immediately when script loads
forceBlueTheme();

const AppWrapper = () => {
  useEffect(() => {
    // Apply blue theme again after React mounts
    forceBlueTheme();
    
    // Apply theme every 100ms for the first 2 seconds to ensure it sticks
    const interval = setInterval(() => {
      forceBlueTheme();
    }, 100);
    
    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  }, []);
  
  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
