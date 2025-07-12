import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Accueil');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header className="mt-6 py-4 px-6 md:px-12 flex items-center justify-between w-full bg-white">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center">
          <span className="sr-only">Logo</span>
        </div>
      </div>

      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Accueil'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''}`}
          onClick={() => handleTabClick('Accueil')}
        >
          Accueil
        </a>   
        <a
            href="#"
              className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Services'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleTabClick('Services');
              }}
        >
            Services
        </a>
        <a
            href="#"
              className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Projets'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleTabClick('Projets');
              }}
        >
            Projets
        </a>
        <a
            href="#"
              className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Entreprise'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleTabClick('Entreprise');
              }}
        >
            Entreprise
        </a>
        <a
            href="#"
              className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Equipe'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleTabClick('Equipe');
              }}
        >
            Equipe
        </a>
        <a
            href="#"
              className={`text-black hover:text-indigo-300 transition-colors ${activeTab === 'Bloc'? 'bg-indigo-100 text-indigo-700 rounded-full px-4 py-2': ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleTabClick('Bloc');
              }}
        >
            Bloc
        </a>
      </nav>


      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Accueil</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Projets</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Entreprise</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Equipe</a>
            <a href="#" className="text-white hover:text-indigo-300 transition-colors">Blog</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;