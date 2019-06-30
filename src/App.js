import React, { useState } from 'react';
import './App.css';


function Todo ({todo, index, completedTodo, removeTodo}) {
  return(
    <div  className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      {todo.text}
        <div>
          <button onClick={() => completedTodo(index)}>Completed</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
    </div>
  );
}

function TodoForm ({addTodo}) {
  const [ value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}> 
      <input className='input' type='text' value={value} placeholder='Add Todo' onChange={ e => setValue(e.target.value) }/>
      <button>Submit</button>
    </form>
  );
}


function App() {

  const [ todos, setTodos] = useState([
    {
      text: 'A',
      completed: false
    },
    {
      text: 'B',
      completed: false
    },
    {
      text: 'C',
      completed: false
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text  }] ;
    setTodos(newTodo); 
  }

  const completedTodo = (index) => {
    const newTodo = [ ...todos ];
    newTodo[index].completed = true;
    setTodos(newTodo); 
  }

  const removeTodo = (index) => {
    const newTodo = [ ...todos ];
    newTodo.splice(index, 1);
    setTodos(newTodo); 
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} 
                index={index} 
                todo={todo} 
                completedTodo = {completedTodo} 
                removeTodo = {removeTodo}/>
        ))}
        <TodoForm addTodo = {addTodo}/>
      </div>
    </div>
  );
}

export default App;
