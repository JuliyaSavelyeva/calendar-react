import React, { useState, useEffect } from 'react';

import './time.scss';

const Time = () => {
  const [topStyles, setTopStyles] = useState(new Date().getMinutes());
  const style = {
    top: topStyles,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTopStyles(new Date().getMinutes());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [topStyles]);

  return (
    <div style={style} className="red-block">
      <div className="red-block__line"></div>
      <div className="red-block__circle"></div>
    </div>
  );
};

export default Time;
