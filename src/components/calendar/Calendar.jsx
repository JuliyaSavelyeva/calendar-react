import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation/Navigation.jsx';
import Week from '../week/Week.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import Modal from '../modal/Modal.jsx';
import { deleteFetchData, getFetchData, postFetchData } from '../../gateway/gateway.js';

import './calendar.scss';

const Calendar = ({ weekDates, isOpenModal, onCloseModal }) => {
  const [eventsData, setEventsData] = useState([]);

  const upgradeDate = data =>
    data.map(event => ({
      ...event,
      dateFrom: new Date(event.dateFrom),
      dateTo: new Date(event.dateTo),
    }));

  const fetchData = () => {
    getFetchData()
      .then(events => {
        setEventsData(upgradeDate(events));
      })
      .catch(() => alert("Internal Server Error. Can't display events"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveEvent = event => {
    postFetchData(event).then(() => fetchData());
  };

  const removeEvent = eventId => {
    deleteFetchData(eventId).then(() => fetchData());
  };

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

Calendar.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
