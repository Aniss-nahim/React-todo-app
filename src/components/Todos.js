import Todo from './Todo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/TodoActions';

const Todos = () => {
    const todos = useSelector((state) => state.todoReducer.todosList)
    const dispatcher = useDispatch();

    useEffect(() => {
        const loading = async () => {
          await dispatcher(fetchTodos());
        }
        loading();
    }, [dispatcher])

    return (
        <div className="list-group container">
        { todos.length > 0 ?
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