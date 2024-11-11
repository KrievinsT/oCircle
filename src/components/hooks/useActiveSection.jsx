import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const percentVisible = visibleHeight / entry.target.offsetHeight;
            
            if (percentVisible > 0.3) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: '-80px 0px -20% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
      sections.forEach(section => observer.observe(section));
    }

    return () => {
      if (sections.length > 0) {
        sections.forEach(section => observer.unobserve(section));
      }
    };
  }, []);

  return activeSection;
};