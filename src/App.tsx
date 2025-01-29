import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Routes } from './routes/index'; 
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