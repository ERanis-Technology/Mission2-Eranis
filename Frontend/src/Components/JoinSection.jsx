import React from 'react';

function JoinSection() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-6 text-center md:text-left">
        Rejoindre l'aventure
      </h2>

      <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto text-center md:text-left">
        Vous êtes étudiant, professionnel, chercheur ou simplement passionné par une tech qui a du sens ? Vous pouvez collaborer à une mission ou postuler à notre communauté via :
      </p>

      <div className="flex justify-between gap-4"> 
        <button
          className="bg-gradient-to-r from-[#8E1B5A] to-[#28081A] text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-pink-200 hover:to-gray-800 transition-colors"
        >
          YNNOVASS
        </button>
        <button
          className="bg-gradient-to-r from-[#B888F5] to-[#28081A] text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-purple-300 hover:to-green-300 hover:to-gray-800 transition-colors"
        >
          Nous contactez
        </button>
      </div>
    </section>
  );
}

export default JoinSection;