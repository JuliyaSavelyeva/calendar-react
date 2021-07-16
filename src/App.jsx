import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const setDate = number => new Date(weekStartDate.setDate(weekStartDate.getDate() + number));

  const onRightWeek = () => {
    setWeekStartDate(setDate(7));
  };

  const onLeftWeek = () => {
    setWeekStartDate(setDate(-7));
  };

  const onCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Header
        weekDates={weekDates}
        onRightWeek={onRightWeek}
        onLeftWeek={onLeftWeek}
        onCurrentWeek={onCurrentWeek}
        onOpenModal={onOpenModal}
      />
      <Calendar weekDates={weekDates} isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
    </>
  );
};

export default App;
