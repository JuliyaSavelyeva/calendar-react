import React from 'react';
import moment from 'moment';
import Day from '../day/Day.jsx';

import './week.scss';

const Week = ({ weekDates, events, removeEvent }) => {
  console.log('Hello');
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const isCurrentTime = moment(new Date()).format('L') === moment(dayStart).format('L');
        // getting all events from the day we will render

        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            isCurrentTime={isCurrentTime}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};

export default Week;
