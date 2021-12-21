

export const todoReducer = (state = [], action) => {

    switch( action.type){
        case 'add':
            return [...state, action.newTodo];

        default:
            return state;
    }
}