import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const PageContainer = () => {
  const [currentPage, setCurrentPage] = useState ('About');

  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />;
    }
    if(currentPage === 'Projects') {
      return <Projects />;
    }
    if(currentPage === 'Contact') {
      return <Contact />;
    }
    if(currentPage === 'Resume') {
      return <Resume />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )

}

export default PageContainer