import './App.css';
import './Component';
import Component from './Component';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Acordar', 'Café', 'Revisar', 'Descansar'];

function App() {
  return (
    <div>
      <Component />
      {taskList.map((tasks) => Task(tasks))}
    </div>
  )
}

export default App;
