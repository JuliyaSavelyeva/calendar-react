import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => {
      const isEqualDate = moment(new Date()).format('L') === moment(dayDate).format('L');

      const dayNameClasses = classNames('day-label__day-name', {
        'current-name': isEqualDate,
      });
      const dayNumberClasses = classNames('day-label__day-number', {
        'current-number': isEqualDate,
      });

      return (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <span className={dayNameClasses}>{days[dayDate.getDay()]}</span>
          <span className={dayNumberClasses}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
