import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDevMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex align-items-center">
      <span className={`me-2 small ${isDevMode ? 'text-brand' : 'text-muted'}`}>DEV</span>
      <div 
        className="form-check form-switch" 
        style={{ cursor: 'pointer' }}
        onClick={toggleTheme}
      >
        <motion.div
          animate={{ x: isDevMode ? 0 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            checked={!isDevMode}
            readOnly
            style={{ width: '3em', height: '1.5em', cursor: 'pointer' }}
          />
        </motion.div>
      </div>
      <span className={`ms-2 small ${!isDevMode ? 'text-indigo' : 'text-muted'}`}>DATA</span>
    </div>
  );
};

export default ThemeToggle;