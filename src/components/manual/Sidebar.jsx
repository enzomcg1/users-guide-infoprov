import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Calculator, Users } from 'lucide-react';

const Sidebar = ({ sections, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-toggle mobile-only"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        className={`manual-sidebar ${isOpen ? 'sidebar-open' : ''}`}
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-header">
          <div className="sidebar-title">
            {Icon && <Icon size={20} />}
            <h3>{title}</h3>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id} className="nav-item">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="nav-link"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          className="sidebar-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
