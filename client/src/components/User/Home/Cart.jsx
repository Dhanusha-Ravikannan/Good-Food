
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Lottie from "react-lottie";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (item) => {
    let updatedCart = [...cart];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item_name === item.item_name);

    if (existingItemIndex !== -1) {
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddItem = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item_name === item.item_name);
    let updatedCart = [...cart];

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with:", cart);
    navigate('/user/PaymentCart');
  };



  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>#S.No </th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>             
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.item_name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="cart-action-btn" onClick={() => handleRemoveItem(item)}>-</button>
                  <button className="cart-action-btn" onClick={() => handleAddItem(item)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      
      )}
      {cart.length > 0 && <button onClick={handleCheckout} className="checkout-button">Checkout</button>}
    </div>
  );
};

export default Cart;
