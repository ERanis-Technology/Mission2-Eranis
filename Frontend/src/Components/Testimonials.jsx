import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      company: 'Business Group',
      name: 'Thomas',
      role: 'Directeur',
      avatar: '/images/EMILE.JPG'
    },
    {
      id: 2,
      company: 'TECH STARTUP ACADEMY',
      name: 'Sophie',
      role: 'CEO',
      avatar: '/images/EMILE.JPG'   
    },
    {
      id: 3,
      company: 'Organisation NON-PROFIT',
      name: 'Michel',
      role: 'Président',
      avatar: '/images/EMILE.JPG'
    },
    {
      id: 4,
      company: 'Business Group',
      name: 'Thomas',
      role: 'Directeur',
      avatar: '/images/EMILE.JPG'
    },
    {
      id: 5,
      company: 'TECH STARTUP ACADEMY',
      name: 'Sophie',
      role: 'CEO',
      avatar: '/images/EMILE.JPG'   
    },
    {
      id: 6,
      company: 'Organisation NON-PROFIT',
      name: 'Michel',
      role: 'Président',
      avatar: '/images/EMILE.JPG'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">
        Ils nous font confiance
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-gray-800 bg-opacity-60 p-6 rounded-lg border border-indigo-800"
          >
            <div className="mb-4">
              <h3 className="text-indigo-400 font-medium mb-1">{testimonial.company}</h3>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;