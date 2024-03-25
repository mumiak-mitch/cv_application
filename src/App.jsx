import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>CV Application</h1>
      
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App
