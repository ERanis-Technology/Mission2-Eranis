import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#040621] to-[#871031] bg-opacity-80 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Colonne ERANIS */}
          <div>
            <h3 className="text-white font-bold mb-4">ERANIS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Notre vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">L'équipe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nos projets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suivre notre actualité</a></li>
            </ul>
          </div>
          
          {/* Colonne Ressources */}
          <div>
            <h3 className="text-white font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog & actualités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bonnes pratiques</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design éthique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Développement & fonctionnalités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Systeme de design ERANIS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Entrepreneuriat</a></li>
            </ul>
          </div>
          
          {/* Colonne Plateformes */}
          <div>
            <h3 className="text-white font-bold mb-4">Plateformes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YNNOVASS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ERANIS Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SimuCare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Formations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prototyping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bibliotheque</a></li>
            </ul>
          </div>
          
          {/* Colonne Collaboration */}
          <div>
            <h3 className="text-white font-bold mb-4">Collaboration</h3>
            <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rejoindre ERANIS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travailler avec nous</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fonctionnalites collaboratives</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FigJam & brainstorming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Espace developpeurs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Assistance & Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">X (Twitter)</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Youtube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-1.572-.483-6.528-.82-11.484-.82C3.02 2.364.293 4.927.293 8.254v7.5c0 3.327 2.727 5.89 7.838 5.89 2.76 0 5.096-.384 7.838-.867 4.956-.483 8.082-2.88 8.082-6.21v-7.5c0-3.327-3.126-5.734-8.082-6.21zm-7.64 10.083v-4.615l4.08 2.308-4.08 2.308z" />  
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ERANIS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;