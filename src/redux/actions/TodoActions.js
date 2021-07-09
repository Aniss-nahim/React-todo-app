import * as actionTypes from '../actionTypes/TodoActionTypes';

const fetchTodo = async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`);
    const todo = await response.json();
    return todo;
}

export const fetchTodos = () => async (dispatch) =>{
    const response = await fetch('http://localhost:5000/todos');
    const todos = await response.json();
    dispatch({
        type : actionTypes.FETCH_TODOS,
        payload : todos
    });
}

export const addTodo = (todo) => async (dispatch) =>{
    const response = await fetch('http://localhost:5000/todos', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(todo)
      })
      const newTodo = await response.json();
    dispatch({
        type : actionTypes.ADD_TODO,
        payload : newTodo
    });
}

export const deleteTodo = (id) => async (dispatch) =>{
    await fetch(`http://localhost:5000/todos/${id}`, {
      method : "DELETE",
    });
    dispatch({
        type : actionTypes.DELETE_TODO,
        payload : { id }
    });
}

export const updateTodo = (id) => async (dispatch) =>{
    const todo = await fetchTodo(id);
    const newTodo = { ...todo, completed : !todo.completed } 
    const response = await fetch(`http://localhost:5000/todos/${id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newTodo)
    });

    const updatedTodo = await response.json();

    dispatch({
        type : actionTypes.UPDATE_TODO,
        payload : updatedTodo
    });
}




