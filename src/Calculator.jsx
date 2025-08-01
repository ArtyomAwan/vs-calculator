import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  // Default prices
  const defaultPrices = {
    itemRemoval: 0.20,
    imageEnhancement: 1.20,
    floorChange: 4.80,
    wallChange: 4.80,
    virtualStaging: 24.00,
    twilight: 4.80,
    virtualRenovation: 90.00
  };

  // State for quantities and prices
  const [quantities, setQuantities] = useState({
    itemRemoval: 0,
    imageEnhancement: 0,
    floorChange: 0,
    wallChange: 0,
    virtualStaging: 0,
    twilight: 0,
    virtualRenovation: 0
  });

  const [prices, setPrices] = useState({ ...defaultPrices });
  const [total, setTotal] = useState(0);

  // Handle quantity changes
  const handleQuantityChange = (service, value) => {
    const numValue = parseFloat(value) || 0;
    setQuantities({
      ...quantities,
      [service]: numValue < 0 ? 0 : numValue
    });
  };

  // Format quantity to 2 decimal places when focus is lost
  const handleQuantityBlur = (service, value) => {
    const numValue = parseFloat(value) || 0;
    setQuantities({
      ...quantities,
      [service]: numValue < 0 ? 0 : parseFloat(numValue.toFixed(2))
    });
  };

  // Handle price changes
  const handlePriceChange = (service, value) => {
    const numValue = parseFloat(value) || 0;
    setPrices({
      ...prices,
      [service]: numValue < 0 ? 0 : numValue
    });
  };

  // Format price to 2 decimal places when focus is lost
  const handlePriceBlur = (service, value) => {
    setPrices({
      ...prices,
      [service]: parseFloat(value).toFixed(2)
    });
  };

  // Calculate total
  const calculateTotal = () => {
    let calculatedTotal = 0;
    
    for (const service in quantities) {
      calculatedTotal += quantities[service] * prices[service];
    }
    
    setTotal(calculatedTotal);
  };

  // Clear all quantities
  const clearValues = () => {
    setQuantities({
      itemRemoval: 0,
      imageEnhancement: 0,
      floorChange: 0,
      wallChange: 0,
      virtualStaging: 0,
      twilight: 0,
      virtualRenovation: 0
    });
    setTotal(0);
  };

  // Reset prices to default
  const resetPrices = () => {
    setPrices({ ...defaultPrices });
  };

  return (
    <div className="calculator-container">
      <h1>VS Services Calculator</h1>
      <div id="calculatorForm">
        {/* Item Removal */}
        <div className="service-row">
          <label htmlFor="itemRemoval">Item Removal:</label>
          <input
            type="number"
            id="itemRemoval"
            min="0"
            step="0.01"
            value={quantities.itemRemoval}
            onChange={(e) => handleQuantityChange('itemRemoval', e.target.value)}
            onBlur={(e) => handleQuantityBlur('itemRemoval', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceItemRemoval"
              value={prices.itemRemoval}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('itemRemoval', e.target.value)}
              onBlur={(e) => handlePriceBlur('itemRemoval', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Image Enhancement */}
        <div className="service-row">
          <label htmlFor="imageEnhancement">Image Enhancement:</label>
          <input
            type="number"
            id="imageEnhancement"
            min="0"
            step="0.01"
            value={quantities.imageEnhancement}
            onChange={(e) => handleQuantityChange('imageEnhancement', e.target.value)}
            onBlur={(e) => handleQuantityBlur('imageEnhancement', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceImageEnhancement"
              value={prices.imageEnhancement}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('imageEnhancement', e.target.value)}
              onBlur={(e) => handlePriceBlur('imageEnhancement', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Floor Change */}
        <div className="service-row">
          <label htmlFor="floorChange">Floor Change:</label>
          <input
            type="number"
            id="floorChange"
            min="0"
            step="0.01"
            value={quantities.floorChange}
            onChange={(e) => handleQuantityChange('floorChange', e.target.value)}
            onBlur={(e) => handleQuantityBlur('floorChange', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceFloorChange"
              value={prices.floorChange}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('floorChange', e.target.value)}
              onBlur={(e) => handlePriceBlur('floorChange', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Wall Change */}
        <div className="service-row">
          <label htmlFor="wallChange">Wall Change:</label>
          <input
            type="number"
            id="wallChange"
            min="0"
            step="0.01"
            value={quantities.wallChange}
            onChange={(e) => handleQuantityChange('wallChange', e.target.value)}
            onBlur={(e) => handleQuantityBlur('wallChange', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceWallChange"
              value={prices.wallChange}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('wallChange', e.target.value)}
              onBlur={(e) => handlePriceBlur('wallChange', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Virtual Staging */}
        <div className="service-row">
          <label htmlFor="virtualStaging">Virtual Staging:</label>
          <input
            type="number"
            id="virtualStaging"
            min="0"
            step="0.01"
            value={quantities.virtualStaging}
            onChange={(e) => handleQuantityChange('virtualStaging', e.target.value)}
            onBlur={(e) => handleQuantityBlur('virtualStaging', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceVirtualStaging"
              value={prices.virtualStaging}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('virtualStaging', e.target.value)}
              onBlur={(e) => handlePriceBlur('virtualStaging', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Twilight */}
        <div className="service-row">
          <label htmlFor="twilight">Twilight:</label>
          <input
            type="number"
            id="twilight"
            min="0"
            step="0.01"
            value={quantities.twilight}
            onChange={(e) => handleQuantityChange('twilight', e.target.value)}
            onBlur={(e) => handleQuantityBlur('twilight', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceTwilight"
              value={prices.twilight}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('twilight', e.target.value)}
              onBlur={(e) => handlePriceBlur('twilight', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Virtual Renovation */}
        <div className="service-row">
          <label htmlFor="virtualRenovation">Virtual Renovation:</label>
          <input
            type="number"
            id="virtualRenovation"
            min="0"
            step="0.01"
            value={quantities.virtualRenovation}
            onChange={(e) => handleQuantityChange('virtualRenovation', e.target.value)}
            onBlur={(e) => handleQuantityBlur('virtualRenovation', e.target.value)}
            className="quantity-input"
          />
          <div className="price-container">
            <span>$</span>
            <input
              type="number"
              id="priceVirtualRenovation"
              value={prices.virtualRenovation}
              step="0.01"
              min="0"
              onChange={(e) => handlePriceChange('virtualRenovation', e.target.value)}
              onBlur={(e) => handlePriceBlur('virtualRenovation', e.target.value)}
              className="price-input"
            />
            <span>each</span>
          </div>
        </div>

        {/* Result Row */}
        <div className="result-row">
          <span>Total:</span>
          <span id="totalAmount">${total.toFixed(2)}</span>
        </div>

        {/* Button Group */}
        <div className="button-group">
          <button type="button" id="calculateBtn" onClick={calculateTotal}>Calculate</button>
          <button type="button" id="clearBtn" onClick={clearValues}>Clear</button>
          <button type="button" id="resetPricesBtn" onClick={resetPrices}>Reset Prices</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 