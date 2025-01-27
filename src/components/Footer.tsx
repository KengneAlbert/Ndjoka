import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Banana, Facebook, Instagram } from "lucide-react";
import Djoka_logo from "../assets/images/ndjoka_logo.png";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/ndjoka",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/ndjoka",
      label: "Instagram",
    },
  ];

  const productLinks = [
    {
      name: "Chips de Plantain",
      path: "/products",
      state: { category: "plantain" },
    },
    { name: "Chin-Chin", path: "/products", state: { category: "chinchin" } },
    { name: "Ndjoka Energy", path: "/products", state: { category: "energy" } },
  ];

  const companyLinks = [
    { name: "À propos", path: "/about" },
    { name: "Impact", path: "/about", hash: "impact" },
  ];

  const contactLinks = [
    { name: "Support", path: "/contact" },
    { name: "Distributeurs", path: "/distributors" },
    { name: "FAQ", path: "/", hash: "faq" },
  ];

  const handleNavigation = (path: string, state?: any, hash?: string) => {
    if (path === "/" && hash) {
      if (location.pathname === "/") {
        // Si on est déjà sur la page d'accueil, on fait défiler jusqu'à la section
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Si on est sur une autre page, on navigue vers l'accueil puis on défile
        navigate(path);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return;
    }
    navigate(path, { state });
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Social Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img className='w-40 h-24' src={Djoka_logo} alt="ndjoka logo"/>
            </Link>
            </div>
            <p className="text-gray-400">
              L'Afrique, le Grenier du Monde
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Produits</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path, link.state)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      handleNavigation(link.path, undefined, link.hash)
                    }
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
            © {new Date().getFullYear()} Ndjoka. Tous droits réservés | Made by KGA
            </p>
        </div>
      </div>
    </footer>
  );
};
