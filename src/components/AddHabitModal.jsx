import { useState } from "react";

function AddHabitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add New Habit</h2>

        <input
          type="text"
          placeholder="Habit Name"
          className="modal-input"
        />

        <input
          type="text"
          placeholder="Goal (example: Daily)"
          className="modal-input"
        />

        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>

          <button className="create-btn">
            Create Habit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitModal;