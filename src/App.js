import './App.css';
import TrainingForm from './components/TrainingForm';

function App() {
  return <TrainingForm onSave={(training) => console.log(training)} />;
}

export default App;
