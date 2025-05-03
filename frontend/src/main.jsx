import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './User/AuthContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter> {/* Only wrap App with BrowserRouter here */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
