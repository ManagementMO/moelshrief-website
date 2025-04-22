import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";

const Index = () => {
  // Scroll reveal functionality
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-sequential');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        {/* Reduced number of background elements */}
      </div>
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-5"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <AboutSection />
          <SkillsMarquee />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
