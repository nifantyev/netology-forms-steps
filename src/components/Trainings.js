import React, { useState } from 'react';
import TrainingForm from './TrainingForm';
import TrainingList from './TrainingList';
import TrainingModel from '../models/TrainingModel';

const Trainings = () => {
  const [trainings, setTrainings] = useState([
    new TrainingModel('18.07.2019', 3.4),
    new TrainingModel('19.07.2019', 14.2),
    new TrainingModel('20.07.2019', 5.7),
    new TrainingModel('30.06.2019', 15.7),
  ]);

  const [form, setForm] = useState({
    date: '',
    distance: '',
  });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSave = (training) => {
    setTrainings((prevTrainings) => {
      let index = prevTrainings.findIndex((o) => o.date === training.date);
      if (index === -1) {
        return [...prevTrainings, training];
      } else {
        const newDistance = prevTrainings[index].distance + training.distance;
        return [
          ...prevTrainings.slice(0, index),
          new TrainingModel(training.date, newDistance),
          ...prevTrainings.slice(index + 1),
        ];
      }
    });
  };

  const handleDelete = (date) => {
    setTrainings((prevTrainings) =>
      prevTrainings.filter((o) => o.date !== date)
    );
  };

  const sorted = trainings.sort((a, b) =>
    b.dateForSort.localeCompare(a.dateForSort)
  );

  return (
    <div className="trainings">
      <TrainingForm form={form} onChange={handleChange} onSave={handleSave} />
      <TrainingList trainings={sorted} onDelete={handleDelete} />
    </div>
  );
};

export default Trainings;
