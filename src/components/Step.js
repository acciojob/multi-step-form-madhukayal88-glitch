import React from "react";

function Step({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h3>Step 1</h3>

          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Step 2</h3>

          <input
            id="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />

          <input
            id="car_price"
            type="text"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <button type="button" onClick={prevStep}>
            Previous
          </button>

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Step 3</h3>

          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          />

          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <button type="button" onClick={prevStep}>
            Previous
          </button>

          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}

export default Step;
