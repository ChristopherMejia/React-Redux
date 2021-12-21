import React, { useReducer, useEffect } from "react";
import TodoListComponent from "./TodoListComponent";
import TodoAdd from "./TodoAdd";
import {todoReducer} from './todoReducer';
import './styles.css';


const init = () =>{

    //Traemos información de localStorage, y lo regresamos como valor inicial que usa el reducer,
    //la función "init" el tercer parametro del reducer es una función que regresa el estado
    // inicial del reducer. 

    return JSON.parse( localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init )

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            todoId
        }
        dispatch(action);
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            newTodo,
        });
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        })
    }


    return (
        <div>
            <h1> TodoApp ( { todos.length } )</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">

                    <TodoListComponent 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>

                <div className="col-5">
                        <TodoAdd
                            handleAddTodo={handleAddTodo} 
                        />
                </div>
            </div>
        </div>
    )
}

export default TodoApp;