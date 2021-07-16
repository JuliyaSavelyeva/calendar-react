import React, { useState } from 'react';
import EventDelete from './EventDelete.jsx';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, removeEvent }) => {
  const [isShowDelete, setIsShowDelete] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const showDelete = () => {
    setIsShowDelete(!isShowDelete);
  };

  const deleteEvent = () => {
    setIsShowDelete(false);
    removeEvent(id);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={showDelete}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      <EventDelete isShowDelete={isShowDelete} deleteEvent={deleteEvent} />
    </>
  );
};

export default Event;
