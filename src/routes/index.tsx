import React, { Suspense } from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

// Lazy loading des pages
const Home = React.lazy(() => import('../pages/Home'));
const Products = React.lazy(() => import('../pages/Products'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Distributors = React.lazy(() => import('../pages/Distributor'));

// Composant de chargement pendant le lazy loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <Loading />
  </div>
);

export const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distributors" element={<Distributors />} />
          
          {/* Route 404 */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
                  <p className="text-xl mb-8">Cette page n'existe pas</p>
                  <a 
                    href="/"
                    className="bg-yellow-400 px-6 py-2 rounded-full text-black hover:bg-yellow-500 transition-colors"
                  >
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            } 
          />
        </RouterRoutes>
      </Suspense>
    </BrowserRouter>
  );
};
