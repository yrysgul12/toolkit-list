import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>Todo list</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
