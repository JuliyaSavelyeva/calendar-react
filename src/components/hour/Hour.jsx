import React from 'react';
import PropTypes from 'prop-types';
import Time from '../time/Time.jsx';

import Event from '../event/Event.jsx';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, removeEvent, currentTimeSlot }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {currentTimeSlot && <Time />}
    {/* if no events in the current hour nothing will render here */}
    {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
      const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
      const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

      return (
        <Event
          key={id}
          // calculating event height = duration of event in minutes
          height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
          marginTop={dateFrom.getMinutes()}
          time={`${eventStart} - ${eventEnd}`}
          title={title}
          id={id}
          removeEvent={removeEvent}
        />
      );
    })}
  </div>
);

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
  currentTimeSlot: PropTypes.bool.isRequired,
};

export default Hour;
