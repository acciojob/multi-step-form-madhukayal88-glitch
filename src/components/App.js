import React, { useState } from 'react';
import Step from './Step';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: '',
  });

  // Updates the shared form data state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Successfully:', formData);
    // You can add additional submission logic here if needed
  };

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Multi-Step Form</h2>
      <form onSubmit={handleFormSubmit}>
        <Step
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </div>
  );
}

export default App;
