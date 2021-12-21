

export const todoReducer = (state = [], action) => {

    switch( action.type){
        case 'add':
            return [...state, action.newTodo];
        case 'delete':
            return state.filter(todo => todo.id !== action.todoId)

        case 'toggle':
            return state.map( todo => {

                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo
                }
            })

        default:
            return state;
    }
}