import React from 'react';
import PropTypes from 'prop-types';
import TrainingModel from '../models/TrainingModel';

const TrainingList = ({ trainings, onDelete }) => {
  const handleDelete = (evt, date) => {
    evt.preventDefault();
    onDelete(date);
  };

  return (
    <div className="training-list">
      <div className="header">
        <div className="header__date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="header__distance">Пройдено км</div>
        <div className="header__actions">Действия</div>
      </div>
      <div className="list">
        {trainings.map((o) => (
          <div className="training" key={o.date}>
            <div className="training__date">{o.date}</div>
            <div className="training__distance">{o.distance}</div>
            <div className="training__actions">
              <a href="#/" onClick={(evt) => handleDelete(evt, o.date)}>
                ✘
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TrainingList.propTypes = {
  trainings: PropTypes.arrayOf(PropTypes.instanceOf(TrainingModel)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TrainingList;
