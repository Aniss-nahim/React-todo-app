import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id : 1,
      title : 'Todo one',
      completed : false
    },
    {
      id : 2,
      title : 'Todo two',
      completed : true
    }
  ])

  const [showAddForm, setShowAddForm] =useState(false);

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, {...todo, id: uuid()}])
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Complete a Todo
  const completeTodo = (id) => {
    setTodos(todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  
  // toggle AddTodo form
  const toggleForm = () => {
    setShowAddForm(!showAddForm);
  }

  return (
    <div className='container my-5 border border-dark p-3 rounded'>
      <Header title='Todo List' showButton={showAddForm} onToggle={toggleForm}/>
      <hr></hr>
      { showAddForm &&
        <AddTodo addTodo={addTodo}/>
      }
      <div className='mt-5'>
        { todos.length > 0 ?
          <Todos todos={todos} onDelete={deleteTodo} onCompleted={completeTodo}/>
           : <div className="alert alert-warning" role="alert">
              Please add new task
            </div>
        }
      </div>
    </div>
  );
}

export default App;
