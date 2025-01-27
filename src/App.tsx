import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Routes } from './routes/index'; // Correction du chemin d'importation
import './i18n/config';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;