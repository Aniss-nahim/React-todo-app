import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useState } from 'react'

const App = () => {
  const [showAddForm, setShowAddForm] =useState(false);
  
  // toggle AddTodo form
  const toggleForm = () => {
    setShowAddForm(!showAddForm);
  }

  return (
    <div className='container my-5 border border-dark p-3 rounded'>
      <Header title='Todo List' showButton={showAddForm} onToggle={toggleForm}/>
      <hr></hr>
      { showAddForm &&
        <AddTodo />
      }
      <div className='mt-5'>
          <Todos />
      </div>
    </div>
  );
}

export default App;
