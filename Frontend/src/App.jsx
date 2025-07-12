import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ProjectsCarousel from './Components/ProjectsCarousel';
import WhySection from './Components/WhySection';
import Testimonials from './Components/Testimonials';
import JoinSection from './Components/JoinSection';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='relative min-h-screen font-sans'>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: 'url("/images/fond.png")',
          backgroundSize: '100% auto'
        }}
      >
      </div>
      <div className="relative z-10">
        <Header/>
        <main>
          <Hero/>
          <ProjectsCarousel/>
          <WhySection/>
          <Testimonials/>
          <JoinSection/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
