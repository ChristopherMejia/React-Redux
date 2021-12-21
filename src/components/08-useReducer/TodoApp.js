import React, { useReducer } from "react";
import {todoReducer} from './todoReducer';
import {useForm} from '../../hooks/useForm';
import './styles.css';
import { useEffect } from "react";




const init = () =>{

    //Traemos información de localStorage, y lo regresamos como valor inicial que usa el reducer,
    //la función "init", el tercer parametro del reducer es una función que regresa el estado
    // inicial del reducer. 

    return JSON.parse( localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init )



    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'add',
            newTodo,
        }

        dispatch(action);
        reset();
    }


    return (
        <div>
            <h1> TodoApp ( { todos.length } )</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li 
                                    key={todo.id}
                                    className="list-group-item">
                                    <p className="text-center "> {i + 1} - {todo.desc} </p>
                                    <button
                                        className="btn btn-danger"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-5">
                        <h4>Agregar Todo</h4>
                        <hr></hr>
                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="description"
                                placeholder="Aprender ... "
                                autoComplete="off"
                                className="form-control"
                                value={description}
                                onChange={handleInputChange}
                            ></input>

                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-1 btn-block"
                            >
                                Agregar
                            </button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;