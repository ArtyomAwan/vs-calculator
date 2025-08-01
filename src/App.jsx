import React, { useState } from 'react';
import Calculator from './Calculator';
import SqftCalculator from './SqftCalculator';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="App">
      <header>
        <div className="nav-tabs">
          <button 
            className={activeTab === 'services' ? 'active' : ''} 
            onClick={() => setActiveTab('services')}
          >
            Service Calculator
          </button>
          <button 
            className={activeTab === 'sqft' ? 'active' : ''} 
            onClick={() => setActiveTab('sqft')}
          >
            SQFT Calculator
          </button>
        </div>
      </header>
      
      <main>
        {activeTab === 'services' ? <Calculator /> : <SqftCalculator />}
      </main>
    </div>
  );
}

export default App; 