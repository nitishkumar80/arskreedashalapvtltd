import React from 'react';

const PaymentForm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Payment Form</h1>
      {/* Add your payment form fields here */}
      <form>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
          <input type="text" id="cardNumber" className="w-full border rounded p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
          <input type="text" id="expiryDate" className="w-full border rounded p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-700">CVV</label>
          <input type="text" id="cvv" className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="bg-brandPrimary text-white py-2 px-4 rounded">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;