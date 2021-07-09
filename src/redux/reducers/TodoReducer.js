import * as actionTypes from '../actionTypes/TodoActionTypes'

const initState = {
    todosList : []
}

const todoReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TODOS: 
            return {
                ...state,
                todosList : action.payload
            };
        case actionTypes.ADD_TODO :
            return {
                ...state,
                todosList : [{...action.payload}, ...state.todosList]
            }
        case actionTypes.DELETE_TODO :
            return { 
                todosList : state.todosList.filter(todo => todo.id !== action.payload.id)
            };
        case actionTypes.UPDATE_TODO :
            return { 
                todosList : state.todosList.map(todo => todo.id === action.payload.id ? action.payload : todo)
            };        
        default : return state;
    }
}

export default todoReducer;