import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Dentists from './components/Dentists';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ direction: 'rtl' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Dentists />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;