import Todo from './Todo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/TodoActions';

const Todos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todosList)

  useEffect(() => {
      setIsLoading(true);
      const loading = async () => {
        await dispatcher(fetchTodos());
        setIsLoading(false);
      }
      loading();
  }, [dispatcher])

    return (
        <div className="list-group container">
        { isLoading ?
          <div className='row text-center'>
            <div className='col-sm-12'>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div> 
          </div>
          :
          todos.length > 0 ?
          todos.map((todo) => (
            <Todo todo={todo}  key={todo.id}/>
          )) : 
            <div className="alert alert-warning" role="alert">
              Please add new task
            </div>
        }
        </div>
    )
}

export default Todos;