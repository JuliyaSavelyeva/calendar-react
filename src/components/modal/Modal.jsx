import React, { useState } from 'react';
import { getDateTime } from '../../utils/dateUtils.js';

import './modal.scss';

const Modal = ({ isOpenModal, onCloseModal, saveEvent }) => {
  const [formDate, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const { title, description, date, startTime, endTime } = formDate;

  const onChange = e => {
    const { name, value } = e.target;

    setEvent({
      ...formDate,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const currentEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    saveEvent(currentEvent);
    onCloseModal();

    setEvent({
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
    });
  };

  if (!isOpenModal) {
    return null;
  }

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form className="event-form" onSubmit={onSubmit}>
            <input
              type="text"
              value={title}
              onChange={onChange}
              name="title"
              placeholder="Title"
              className="event-form__field"
              required
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={onChange}
                required
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={onChange}
                required
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={onChange}
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={onChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
