import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`manual-section ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-divider"></div>
      </div>
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
