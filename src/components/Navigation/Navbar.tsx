import React, { useState, useEffect } from "react";
import { Menu, X, Banana } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Djoka_logo from '../../assets/images/ndjoka_logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const getNavStyles = () => {
    const baseStyles = "fixed w-full z-50 transition-all duration-500";
    const initialPosition = "px-4 mt-10";
    const scrolledPosition = "px-0 mt-0";

    if (scrollPosition < 50) {
      return `${baseStyles} ${initialPosition}`;
    } else if (scrollPosition < 100) {
      const progress = (scrollPosition - 50) / 50; // 0 to 1
      const mt = 10 - progress * 10;
      const px = 4 - progress * 4;
      return `${baseStyles} px-${px} mt-${mt}`;
    }
    return `${baseStyles} ${scrolledPosition}`;
  };

  const getContainerStyles = () => {
    const baseStyles = "transition-all duration-500";
    const initialWidth = "max-w-5xl";
    const scrolledWidth = "max-w-full";

    return `${baseStyles} ${
      scrollPosition > 100 ? scrolledWidth : initialWidth
    } mx-auto`;
  };

  const getInnerContainerStyles = () => {
    const baseStyles = "relative rounded-full transition-all duration-500";
    const initialBg = "bg-black/50 backdrop-blur-sm";
    const scrolledBg = "bg-black/90 backdrop-blur-md";
    const initialRadius = "rounded-full";
    const scrolledRadius = "rounded-none";

    if (scrollPosition < 50) {
      return `${baseStyles} ${initialBg} ${initialRadius}`;
    } else if (scrollPosition < 100) {
      const progress = (scrollPosition - 50) / 50;
      return `${baseStyles} ${progress < 0.5 ? initialBg : scrolledBg} ${
        progress < 0.5 ? initialRadius : scrolledRadius
      }`;
    }
    return `${baseStyles} ${scrolledBg} ${scrolledRadius}`;
  };

  return (
    <nav className={getNavStyles()}>
      <div className={getContainerStyles()}>
        <div className={getInnerContainerStyles()}>
          <div className="flex items-center justify-between px-6 py-3">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img className='w-36 h-16' src={Djoka_logo} alt="ndjoka logo"/>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
              <Link to="/products" className="nav-link">
                Nos Produits
              </Link>
              <Link to="/about" className="nav-link">
                À Propos
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link
                to="/distributors"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold 
                         hover:bg-yellow-500 transition-all transform hover:scale-105 
                         hover:shadow-lg active:scale-95"
              >
                Devenir Distributeur
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden">
              <div className="py-3">
                <Link
                  to="/"
                  className="block px-6 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  to="/produits"
                  className="block px-6 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  Nos Produits
                </Link>
                <Link
                  to="/about"
                  className="block px-6 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  À Propos
                </Link>
                <Link
                  to="/contact"
                  className="block px-6 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  Contact
                </Link>
                <div className="px-4 pt-2">
                  <Link
                    to="/devenir-distributeur"
                    className="block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold 
                             text-center hover:bg-yellow-500 transition-colors"
                  >
                    Devenir Distributeur
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
