import { StrictMode } from 'react';  // Importing React's StrictMode to enforce best practices
import { createRoot } from 'react-dom/client';  // Importing the createRoot function to render the app
import App from './App.jsx';  // Importing the main App component
import './index.css';  // Importing the global CSS file for styling

// Creating a root to render the App component in the 'root' element of the HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping the App component in StrictMode to highlight potential problems */}
    <App />
  </StrictMode>,
);
