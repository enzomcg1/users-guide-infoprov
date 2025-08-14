import React from 'react';
import { motion } from 'framer-motion';

const Table = ({ headers, data, className = '', children }) => {
  // If children are provided, render them directly (for JSX content)
  if (children) {
    return (
      <motion.div
        className={`table-container ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="table-wrapper">
          <table className="manual-table">
            {children}
          </table>
        </div>
      </motion.div>
    );
  }

  // If headers and data are provided, render them as props
  if (headers && data) {
    return (
      <motion.div
        className={`table-container ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="table-wrapper">
          <table className="manual-table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="table-header">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="table-row">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="table-cell">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
  }

  // Fallback: render empty table
  return (
    <motion.div
      className={`table-container ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="table-wrapper">
        <table className="manual-table">
          {children}
        </table>
      </div>
    </motion.div>
  );
};

export default Table;
