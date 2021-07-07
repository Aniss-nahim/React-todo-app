import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useState, useEffect} from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect( () => {
      getTodos();
  }, [])

  // fetch All todos
  const getTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data);
  }

  // find todo by id
  const getTodo = async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`);
    const todo = await response.json();
    return todo;
  }

  const [showAddForm, setShowAddForm] =useState(false);

  // Add Todo
  const addTodo = async (todo) => {
    const response = await fetch('http://localhost:5000/todos', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(todo)
    })
    const newTodo = await response.json();
    setTodos([...todos, newTodo])
  }

  // Delete Todo
  const deleteTodo =  async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method : "DELETE",
    })
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Complete or uncomplete a Todo
  const completeTodo = async (id) => {
    const todoTarget = await getTodo(id);
    const updatedTodo = { ...todoTarget, completed : !todoTarget.completed } 
    const response = await fetch(`http://localhost:5000/todos/${id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(updatedTodo)
    })

    const data = await response.json();

    setTodos(todos.map((todo) => 
        todo.id === id ? data : todo
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
