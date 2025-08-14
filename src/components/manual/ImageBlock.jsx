import React from 'react';
import { motion } from 'framer-motion';

const ImageBlock = ({ src, alt, caption, className = '' }) => {
  return (
    <motion.div
      className={`image-block ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="image-container">
        <img 
          src={src} 
          alt={alt} 
          className="manual-image"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="image-caption">{caption}</p>
      )}
    </motion.div>
  );
};

export default ImageBlock;
