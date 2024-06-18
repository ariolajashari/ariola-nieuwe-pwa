import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Mijn Takenlijst</h1>
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Voeg een nieuwe taak toe"
          />
          <button onClick={addTask}>Toevoegen</button>
          <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
          </ul>
        </header>
      </div>
  );
}

export default App;
