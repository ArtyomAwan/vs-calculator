import React, { useState } from 'react';
import './SqftCalculator.css';

const SqftCalculator = () => {
  const [originalSqft, setOriginalSqft] = useState('');
  const [ratePerSqft, setRatePerSqft] = useState('0.20');
  const [amountToReturn, setAmountToReturn] = useState('');
  const [result, setResult] = useState({
    sqftToReturn: 0,
    remainingSqft: 0,
    calculated: false
  });

  const handleCalculate = () => {
    // Convert inputs to numbers and handle validation
    const sqft = parseFloat(originalSqft);
    const rate = parseFloat(ratePerSqft);
    const returnAmount = parseFloat(amountToReturn);
    
    if (isNaN(sqft) || isNaN(rate) || isNaN(returnAmount) || rate === 0) {
      alert('Please enter valid numbers. Rate cannot be zero.');
      return;
    }
    
    // Calculate square feet to return based on the amount
    const sqftToReturn = parseFloat((returnAmount / rate).toFixed(2));
    
    // Calculate remaining square feet
    const remainingSqft = parseFloat((sqft - sqftToReturn).toFixed(2));
    
    if (remainingSqft < 0) {
      alert('The return amount exceeds the original order value.');
      return;
    }
    
    // Set the results
    setResult({
      sqftToReturn,
      remainingSqft,
      calculated: true
    });
  };

  const handleClear = () => {
    setOriginalSqft('');
    setRatePerSqft('0.20'); // Maintain default rate when clearing
    setAmountToReturn('');
    setResult({
      sqftToReturn: 0,
      remainingSqft: 0,
      calculated: false
    });
  };

  return (
    <div className="sqft-calculator-container">
      <h1>Calculate Remaining Sqft for Item Removal</h1>
      <div className="calculator-form">
        <div className="input-group">
          <label htmlFor="originalSqft">Original Square Feet:</label>
          <input
            type="number"
            id="originalSqft"
            value={originalSqft}
            onChange={(e) => setOriginalSqft(e.target.value)}
            min="0"
            step="0.01"
            placeholder="e.g., 120"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="ratePerSqft">Rate per Square Foot ($):</label>
          <input
            type="number"
            id="ratePerSqft"
            value={ratePerSqft}
            onChange={(e) => setRatePerSqft(e.target.value)}
            min="0.01"
            step="0.01"
            placeholder="e.g., 0.20"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="amountToReturn">Amount to Return ($):</label>
          <input
            type="number"
            id="amountToReturn"
            value={amountToReturn}
            onChange={(e) => setAmountToReturn(e.target.value)}
            min="0"
            step="0.01"
            placeholder="e.g., 11"
          />
        </div>
        
        <div className="button-group">
          <button id="calculateBtn" onClick={handleCalculate}>Calculate</button>
          <button id="clearBtn" onClick={handleClear}>Clear</button>
        </div>
      </div>
      
      {result.calculated && (
        <div className="result-section">
          <h2>Results:</h2>
          
          <div className="calculation-steps">
            <div className="step">
              <h3>Step 1: Find how many sqft ${amountToReturn} equals.</h3>
              <div className="formula">
                sqft to return = ${amountToReturn} ÷ ${ratePerSqft} = {result.sqftToReturn} sqft
              </div>
            </div>
            
            <div className="step">
              <h3>Step 2: Subtract that from the original sqft:</h3>
              <div className="formula">
                remaining sqft = {originalSqft} − {result.sqftToReturn} = {result.remainingSqft} sqft
              </div>
            </div>
          </div>
          
          <div className="final-answer">
            <h3>Final Answer:</h3>
            <p><strong>{result.remainingSqft} sqft</strong> are left.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SqftCalculator; 