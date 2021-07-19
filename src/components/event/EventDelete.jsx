import React from 'react';
import PropTypes from 'prop-types';

const EventDelete = ({ isShowDelete, deleteEvent }) =>
  isShowDelete && (
    <button className="delete-event-btn" onClick={deleteEvent}>
      <i className="fas fa-trash"></i>
      Delete
    </button>
  );

EventDelete.propTypes = {
  isShowDelete: PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default EventDelete;
