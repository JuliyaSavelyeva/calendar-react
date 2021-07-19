import React from 'react';
import PropTypes from 'prop-types';
import { months } from '../../utils/dateUtils.js';
import './header.scss';

const Header = ({ onOpenModal, weekDates, onRightWeek, onLeftWeek, onCurrentWeek }) => {
  const currentMonth = weekDates[0].getMonth();
  const isTwoMonth = weekDates.find(dayData => dayData.getMonth() !== currentMonth);

  const month = !isTwoMonth
    ? months[currentMonth]
    : `${months[currentMonth]} - ${months[currentMonth + 1]}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={onOpenModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onCurrentWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onLeftWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onRightWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onRightWeek: PropTypes.func.isRequired,
  onLeftWeek: PropTypes.func.isRequired,
  onCurrentWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Header;
