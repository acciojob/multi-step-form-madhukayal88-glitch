import React from 'react';

function Step({ currentStep, formData, handleChange, nextStep, prevStep }) {
  return (
    <div>
      {/* Step 1: Name Details */}
      {currentStep === 1 && (
        <div>
          <h3>Step 1: Personal Details</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Step 2: Car Details */}
      {currentStep === 2 && (
        <div>
          <h3>Step 2: Car Details</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="model">Car Model</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="car_price">Car Price</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Step 3: Payment Details */}
      {currentStep === 3 && (
        <div>
          <h3>Step 3: Payment Details</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="card_info">Card Information</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="expiry_date">Expiry Date</label>
            <input
              type="text"
              id="expiry_date"
              placeholder="MM/YY"
              value={formData.expiry_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        
        {currentStep < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button type="submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Step;
