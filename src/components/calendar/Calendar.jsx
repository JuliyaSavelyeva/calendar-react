import React, { useState } from 'react';

import Navigation from '../navigation/Navigation.jsx';
import Week from '../week/Week.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import Modal from '../modal/Modal.jsx';
import events from '../../gateway/events.js';

import './calendar.scss';

const Calendar = ({ weekDates, isOpenModal, onCloseModal }) => {
  const [eventsData, setEventsData] = useState(events);
  const saveEvent = event => setEventsData(eventsData.concat(event));

  const removeEvent = eventId => setEventsData(eventsData.filter(event => event.id !== eventId));

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={eventsData} removeEvent={removeEvent} />
        </div>
      </div>
      <Modal isOpenModal={isOpenModal} onCloseModal={onCloseModal} saveEvent={saveEvent} />
    </section>
  );
};

export default Calendar;
