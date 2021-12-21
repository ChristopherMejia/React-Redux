const initialState = [{
    id: 1,
    todo: 'comprar leche',
    done: false,
}];


const todoReducer = ( state = initialState, action) => {
    
    if( action?.type === 'agregar'){
        return [ ...state, action.newTodo];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'comprar pan',
    done: false,
};

const action = {
    type: 'agregar',
    newTodo
};

todos = todoReducer(todos, action );

console.log(todos);
