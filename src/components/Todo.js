import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions/TodoActions';

const Todo = ({todo}) => {
    const dispatcher = useDispatch();
    return (
        <button 
            type="button" 
            className={`list-group-item list-group-item-action p-3 ${todo.completed ? 'bg-success text-white': ''}`}
            key={todo.id}
            onDoubleClick={() => dispatcher(updateTodo(todo.id))}> 
            {todo.title}
            <span className='float-right'>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='text-danger' 
                    onClick={() => dispatcher(deleteTodo(todo.id)) }/>
            </span>
        </button>
    )
}

Todo.propTypes = {
    todo : PropTypes.object.isRequired
}


export default Todo
