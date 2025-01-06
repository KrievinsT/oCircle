import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries[0];
          if (mostVisible.intersectionRatio > 0.3) {
            setActiveSection(mostVisible.target.id);
          }
        } else {
          setActiveSection('');
        }
      },
      {
        threshold: [0, 0.2, 0.3, 0.4, 0.6, 0.8, 1.0],
        rootMargin: '-80px 0px -20% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
      sections.forEach(section => observer.observe(section));

      const handleScroll = () => {
        if (window.scrollY === 0) {
          setActiveSection('');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        sections.forEach(section => observer.unobserve(section));
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return activeSection;
};