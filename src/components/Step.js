import React from 'react';

function Step({ currentStep, formData, handleChange, nextStep, prevStep }) {
  return (
    <div>
      {/* Step 1: Identity Profile Info */}
      {currentStep === 1 && (
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Step 2: Automotive Asset Info */}
      {currentStep === 2 && (
        <div>
          <label htmlFor="model">Car Model</label>
          <input
            type="text"
            id="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label htmlFor="car_price">Car Price</label>
          <input
            type="number"
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Step 3: Transaction Card Info */}
      {currentStep === 3 && (
        <div>
          <label htmlFor="card_info">Card Information</label>
          <input
            type="text"
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label htmlFor="expiry_date">Expiry Date</label>
          <input
            type="text"
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Navigation and Submission Buttons Blocks */}
      <div style={{ marginTop: '20px' }}>
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
