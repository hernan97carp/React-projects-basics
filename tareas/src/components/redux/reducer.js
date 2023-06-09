import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO
} from "./actions";

const initialState = {
    todos: []
}

// { id:1, text: "Estudiar Redux", complete: false }
// [ { id: 0 ---}, { id: 1 ---, complete: true}, { id: 2 ---} ]
//   ^----------^

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }
        }
        case DELETE_TODO: {
            const filteredTodos = state.todos.filter(
                todo => todo.id !== action.payload
            )
            return {
                ...state,
                todos: filteredTodos
            }
        }
        case COMPLETE_TODO: {
            const newTodos = state.todos.map(
                todo => todo.id === action.payload ?
                    { ...todo, complete: true } :
                    todo
            )
            return {
                ...state,
                todos: newTodos
            }
        }
        default: {
            return { ...state }
        }
    } 
}

export default reducer;