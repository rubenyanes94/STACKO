import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDevMode, toggleTheme } = useContext(ThemeContext);

  const devTextClass = isDevMode 
    ? 'text-white font-monospace' 
    : 'text-secondary font-monospace opacity-50'; 
    
  const dataTextClass = isDevMode 
    ? 'text-white-50 fw-bold opacity-50' 
    : 'text-dark fw-bold'; 

  return (
    <div className="d-flex align-items-center">
      <span 
        className={`me-2 small transition-colors ${devTextClass}`} 
        style={{ cursor: 'pointer', fontSize: '0.85rem' }}
        onClick={() => !isDevMode && toggleTheme()}
      >
        DEV
      </span>
      
      <div 
        className="form-check form-switch m-0 p-0 d-flex align-items-center" 
        style={{ cursor: 'pointer' }}
        onClick={toggleTheme}
      >
        <motion.div
          animate={{ x: isDevMode ? 0 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <input 
            className="form-check-input ms-0 shadow-none theme-switch-custom" 
            type="checkbox" 
            role="switch" 
            checked={!isDevMode}
            readOnly
            style={{ 
              width: '3em', 
              height: '1.5em', 
              cursor: 'pointer',
              backgroundColor: isDevMode ? '#333' : '#000',
              borderColor: isDevMode ? '#555' : '#000'
            }}
          />
        </motion.div>
      </div>
      <span 
        className={`ms-2 small transition-colors ${dataTextClass}`} 
        style={{ cursor: 'pointer', fontSize: '0.85rem', letterSpacing: isDevMode ? '0' : '1px' }}
        onClick={() => isDevMode && toggleTheme()}
      >
        DATA
      </span>
    </div>
  );
};

export default ThemeToggle;