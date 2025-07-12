import React from 'react';

function Hero() {
  return (
    <section className="py-20 px-6 md:px-12 text-center md:text-left max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-5xl font-bold text-white mb-6">
          Revenir à l'essentiel, <br/>
          revenir à l'Éden
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
        Un monde où la technologie s’efface pour mieux servir l’homme. Ici, la machine n’est plus une fin, mais un outil au service de l’harmonie, du vivant et de l’essentiel. Un retour aux origines, repensé pour demain.
        </p>
      </div>
    </section>
  );
}

export default Hero;