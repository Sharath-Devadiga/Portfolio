'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Profile from '@/components/Profile';
import CaseFiles from '@/components/CaseFiles';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showNav, setShowNav] = useState(false);

  const handleStartInvestigation = () => {
    setShowNav(true);
    setActiveSection('profile');

    setTimeout(() => {
      document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      const navHeight = window.innerWidth < 768 ? 70 : 80; // Smaller offset for mobile
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'cases', 'tools', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowNav(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero onStartInvestigation={handleStartInvestigation} />

      {showNav && (
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      )}

      <Profile />
      <CaseFiles />
      <Skills />
      <Contact />

      <footer className="bg-card border-t-2 border-border py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-typewriter text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sharath Devadiga. ALL RIGHTS RESERVED.
          </p>
    
        </div>
      </footer>
    </div>
  );
}

