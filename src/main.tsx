import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PorscheDesignSystemProvider theme="light">
        <App />
      </PorscheDesignSystemProvider>
    </BrowserRouter>
  </StrictMode>
);
