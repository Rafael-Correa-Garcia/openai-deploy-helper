import React, { useState } from 'react';
import PostureChecker from './components/PostureChecker';

function App() {
  const [exercise, setExercise] = useState('squat');

  return (
    <div>
      <h1>Form Check AI</h1>
      <select onChange={(e) => setExercise(e.target.value)}>
        <option value="squat">Sentadilla</option>
        <option value="deadlift">Peso Muerto</option>
        <option value="bench_press">Press de Banca</option>
        <option value="row">Remo con Barra</option>
      </select>
      <PostureChecker exercise={exercise} />
    </div>
  );
}

export default App;
