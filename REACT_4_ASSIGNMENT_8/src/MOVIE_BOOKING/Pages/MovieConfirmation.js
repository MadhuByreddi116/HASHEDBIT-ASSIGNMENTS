import React from 'react';
import { useLocation } from 'react-router-dom';
import './confirm.css';

const generateBookingId = () => Math.random().toString(36).substr(2, 9).toUpperCase();

const BookingConfirmation = () => {



  const {state} = useLocation();

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed</h2>
      <p className="booking-id">Booking ID: {generateBookingId()}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );

};

export default BookingConfirmation;
