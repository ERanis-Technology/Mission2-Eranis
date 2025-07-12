import React, { useState, useRef, useEffect } from 'react';

function ProjectsCarousel() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const projects = [
    { id: 1, title: 'Projet 1', image: '/images/Projet1.png' },
    { id: 2, title: 'Projet 2', image: '/images/Projet2.png' },
    { id: 3, title: 'Projet 3', image: '/images/Projet3.png' },
    { id: 4, title: 'Projet 4', image: '/images/Projet4.png' },
    { id: 5, title: 'Projet 5', image: '/images/Projet5.png' },
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollability = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('scroll', checkScrollability);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
        Nos projets d'impact
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10 text-white ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-opacity-70'}`}
          disabled={!canScrollLeft}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-6 snap-x"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-64 md:w-72 snap-start"
            >
              <div className='relative group'>
                <div className="relative rounded-lg overflow-hidden backdrop-blur-md bg-white/30"> 
                  <div className="relative rounded-t-lg overflow-hidden h-40 md:h-48 group p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-4xl font-medium text-lg text-center">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10 text-white ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-opacity-70'}`}
          disabled={!canScrollRight}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ProjectsCarousel;