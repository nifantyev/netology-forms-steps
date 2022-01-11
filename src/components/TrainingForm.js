import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrainingModel from '../models/TrainingModel';

const TrainingForm = ({ onSave }) => {
  const [form, setForm] = useState({
    date: '',
    distance: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const training = new TrainingModel(form.date, parseFloat(form.distance));
    onSave(training);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="training-form">
        <div className="training-form__item">
          <label className="training-form__label">Дата (ДД.ММ.ГГГГ)</label>
          <input
            className="training-form__input"
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div className="training-form__item">
          <label className="training-form__label">Пройдено км</label>
          <input
            className="training-form__input"
            type="text"
            name="distance"
            value={form.distance}
            onChange={handleChange}
          />
        </div>
        <div className="training-form__item">
          <button className="training-form__button" type="submit">
            OK
          </button>
        </div>
      </div>
    </form>
  );
};

TrainingForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default TrainingForm;
