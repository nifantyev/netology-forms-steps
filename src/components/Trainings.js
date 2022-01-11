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

  const [editedDate, setEditedDate] = useState('');

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSave = (training) => {
    setTrainings((prevTrainings) => {
      if (editedDate) {
        const editedIndex = prevTrainings.findIndex(
          (o) => o.date === editedDate
        );
        const index = prevTrainings.findIndex((o) => o.date === training.date);
        const newTrainings = [...prevTrainings];

        if (editedIndex === index) {
          newTrainings[index] = training;
        } else {
          newTrainings[index] = training;
          newTrainings.splice(editedIndex, 1);
        }

        return newTrainings;
      } else {
        const index = prevTrainings.findIndex((o) => o.date === training.date);
        if (index === -1) {
          return [...prevTrainings, training];
        } else {
          const newDistance = prevTrainings[index].distance + training.distance;
          const newTrainings = [...prevTrainings];
          newTrainings[index] = new TrainingModel(training.date, newDistance);
          return newTrainings;
        }
      }
    });
    setForm({
      date: '',
      distance: '',
    });
    setEditedDate('');
  };

  const handleDelete = (date) => {
    setTrainings((prevTrainings) =>
      prevTrainings.filter((o) => o.date !== date)
    );
  };

  const handleEdit = (date) => {
    const training = trainings.find((o) => o.date === date);
    if (training) {
      setForm({
        date: training.date,
        distance: training.distance,
      });
      setEditedDate(date);
    }
  };

  const sorted = trainings.sort((a, b) =>
    b.dateForSort.localeCompare(a.dateForSort)
  );

  return (
    <div className="trainings">
      <TrainingForm form={form} onChange={handleChange} onSave={handleSave} />
      <TrainingList
        trainings={sorted}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Trainings;
