import PropTypes from 'prop-types'
import Todo from './Todo';

const Todos = ({ todos, onDelete, onCompleted }) => {
    return (
        <div className="list-group container">
        {
          todos.map((todo) => (
            <Todo todo={todo}  key={todo.id} onDelete={onDelete} onCompleted={onCompleted}/>
          ))
        }
        </div>
    )
}

Todos.defaultProps = {
    todos : []
}

Todos.propTypes = {
    todos : PropTypes.array 
}

export default Todos
