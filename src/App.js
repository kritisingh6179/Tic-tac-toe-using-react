import React, { useState } from 'react'
import Tictacetoe from './component/Tictacetoe';
import './App.css';
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className='App'>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Tictacetoe></Tictacetoe>
            <div className="c1">
          <div className="toggle">
            <input type="checkbox"  checked={isDarkMode}
          onChange={toggleDarkMode} />
            <span className="b1"></span>
            <span className="l1">☼</span>
          </div>
          
        </div>
      
      
     
      </div>
    </div>
    
  )
}

export default App