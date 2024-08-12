// import React from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import "./Checkout.css";

// const Checkout = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: 'Payment Successful!',
//       text: 'Your payment bill has been sent to your email.',
//       icon: 'success',
//       confirmButtonText: 'Great!',
//       customClass: {
//         confirmButton: 'checkout-confirm-button',
//         title: 'checkout-title',
//         content: 'checkout-content',
//       },
//     });
//   };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" placeholder="John Doe" required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" placeholder="johndoe@example.com" required />
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <input type="text" placeholder="123 Main St" required />
//         </div>
//         <div className="form-group">
//           <label>Amount:</label>
//           <input type="number" placeholder="Amount" required />
//         </div>
//         <div className="form-group">
//           <label>Payment Method:</label>
//           <select required>
//             <option value="card">Credit Card</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </div>
//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;




import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    amount: '',
    paymentMethod: 'card',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/checkout", formData);
      Swal.fire({
        title: 'Payment Successful!',
        text: 'Your payment bill has been sent to your email.',
        icon: 'success',
        confirmButtonText: 'Great!',
        customClass: {
          confirmButton: 'checkout-confirm-button',
          title: 'checkout-title',
          content: 'checkout-content',
        },
      });
    } catch (error) {
      Swal.fire({
        title: 'Payment Failed!',
        text: 'There was an error processing your payment. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'checkout-confirm-button',
          title: 'checkout-title',
          content: 'checkout-content',
        },
      });
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
