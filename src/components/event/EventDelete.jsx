import React from 'react';

const EventDelete = ({ isShowDelete, deleteEvent }) =>
  isShowDelete && (
    <button className="delete-event-btn" onClick={deleteEvent}>
      <i className="fas fa-trash"></i>
      Delete
    </button>
  );

export default EventDelete;
