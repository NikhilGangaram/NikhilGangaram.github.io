'use client';

// Home.js
import React from 'react';
import dynamic from 'next/dynamic'; // Import the dynamic function
import Navbar from './pages/navbar';
import Hero from './pages/hero';
import Edu from './pages/edu';
import Work from './pages/work';
import Research from './pages/research';
import Footer from './pages/footer';

export default function Home() {
  
  const [currentPage, setCurrentPage] = React.useState("hero");
  
  const handleNavClick = (event:Event)=> {
    var nav = event.target as HTMLButtonElement;
    var nav_id = nav.id;
    setCurrentPage(nav_id);
  }

  return (
    <div id="hero" className='max-w-2xl mx-5 md:m-auto'>
      {/* hey! thanks for checking out my site. i built it myself with next.js, tailwindcss, and typescript, but it's mostly just html. send me an email, we should chat!   */}
      <Navbar onNavClick={handleNavClick} />
      {currentPage == 'hero' ? <Hero /> : null}
      {currentPage == 'edu' ? <Edu /> : null}
      {currentPage == 'work' ? <Work /> : null}
      {currentPage == 'research' ? <Research /> : null}
      <Footer />
    </div>
  );
}