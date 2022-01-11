import './App.css';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import TrainingModel from './models/TrainingModel';

function App() {
  const trainings = [
    new TrainingModel('18.07.2019', 3.4),
    new TrainingModel('19.07.2019', 14.2),
    new TrainingModel('20.07.2019', 5.7),
    new TrainingModel('30.06.2019', 15.7),
  ];
  return (
    <>
      <TrainingForm onSave={(training) => console.log(training)} />
      <TrainingList
        trainings={trainings}
        onDelete={(date) => console.log(`Удаление ${date}`)}
      />
    </>
  );
}

export default App;
