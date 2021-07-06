import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, onDelete, onCompleted}) => {
    return (
        <button 
            type="button" 
            className={`list-group-item list-group-item-action p-3 ${todo.completed ? 'bg-success text-white': ''}`}
            key={todo.id}
            onDoubleClick={() => onCompleted(todo.id)}> 
            {todo.title}
            <span className='float-right'>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='text-danger' 
                    onClick={() => onDelete(todo.id)}/>
            </span>
        </button>
    )
}

Todo.propTypes = {
    todo : PropTypes.object.isRequired
}


export default Todo
