// RoomExchangeForm.js

import React, { useState } from 'react';
import './RoomExchangeForm.css';
import Notification from './Notification';

const RoomExchangeForm = ({startSubmit}) => {
  // State to manage form fields
  const [currentRoom, setCurrentRoom] = useState('');
  const [preferredRoom, setPreferredRoom] = useState('');
  const [reason, setReason] = useState('');

  // Function to handle form submission
  const handleExchangeRequest = (event) => {
    event.preventDefault();

    // Perform actions with the form data (e.g., send to the server)
    // You can add your logic for handling the room exchange request here

    const details = {
        currentRoom,
        preferredRoom,
        reason
    }
    startSubmit(details)
    // Reset form fields after submission
    setCurrentRoom('');
    setPreferredRoom('');
    setReason('');
  };

  return (
    
      <form onSubmit={handleExchangeRequest}>
        <label className="currentRoom">Current Room:
        <input
          type="text"
          id="currentRoom"
          value={currentRoom}
          onChange={(e) => setCurrentRoom(e.target.value)}
          required
        />
        </label>
        <label className="preferredRoom">Preferred Room:
        <input
          type="text"
          id="preferredRoom"
          value={preferredRoom}
          onChange={(e) => setPreferredRoom(e.target.value)}
          required
        />
        </label>
        <label className="reason">Reason for Exchange:
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        ></textarea>
        </label>
        <button type="submit">Submit Request</button>
      </form>
    
  );
};

export default RoomExchangeForm;
