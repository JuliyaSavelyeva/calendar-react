import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour.jsx';

const Day = ({ dataDay, dayEvents, removeEvent, isCurrentTime }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
        const currentTimeSlot = isCurrentTime ? new Date().getHours() === hour : false;

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            removeEvent={removeEvent}
            currentTimeSlot={currentTimeSlot}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
  isCurrentTime: PropTypes.bool.isRequired,
};

export default Day;
